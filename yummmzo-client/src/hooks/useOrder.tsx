import { createOrderService, getOrderByIdService, getOrdersService, cancelOrderService, reorderService } from "@/services/order.services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { toast } from "./use-toast";
import { useNavigate } from "react-router-dom";

export const useOrder = () => {
    // useSelector
    const user = useSelector((state: any) => state.auth.user);

    // useQueryClient
    const queryClient = useQueryClient();

    // useMutation
    const createOrderMutation = useMutation({
        mutationFn: (payload: {
            addressId: number;
            paymentMethod: 'COD' | 'MOCK_ONLINE';
            deliveryInstruction?: string;
        }) => {
            if(!user?.id) throw new Error("User not logged in.");
            return createOrderService(user.id, payload);
        },
        onError: (error: any) => {
            toast({
                variant: 'destructive',
                title: "Order Failed!",
                description: error.response?.data?.message ?? "Something went wrong."
            });
        }
    });

    const cancelOrderMutation = useMutation({
        mutationFn: (orderId: string) => {
            if(!user?.id) throw new Error("User not logged in.");
            return cancelOrderService(user.id, orderId);
        },
        onSuccess: (_, orderId) => {
            queryClient.invalidateQueries({ queryKey: ['order', orderId] });
            queryClient.invalidateQueries({ queryKey: ['orders'] });
            toast({ title: "Order Cancelled." });
        },
        onError: (error: any) => {
            toast({
                variant: 'destructive',
                title: "Cancel Failed!",
                description: error.response?.data?.message ?? "Something went wrong."
            });
        }
    });

    return {
        createOrder: createOrderMutation.mutateAsync,
        isCreatingOrder: createOrderMutation.isPending,
        cancelOrder: cancelOrderMutation.mutateAsync,
        isCancellingOrder: cancelOrderMutation.isPending
    };
};

export const useOrders = (status?: string) => {
    // useSelector
    const user = useSelector((state: any) => state.auth.user);

    // useQuery
    const { data, isLoading } = useQuery({
        queryKey: ['orders', user?.id, status],
        queryFn: () => getOrdersService(user.id, { status, limit: 50 }),
        enabled: !!user?.id
    });

    return {
        ordersData: data,
        orders: data?.orders ?? [],
        isOrdersLoading: isLoading
    };
};

export const useOrderById = (orderId: string | undefined) => {
    // useSelector
    const user = useSelector((state: any) => state.auth.user);

    const TERMINAL_STATUSES = ['DELIVERED', 'CANCELLED'];

    // useQuery
    const { data: order, isLoading } = useQuery({
        queryKey: ['order', orderId],
        queryFn: () => getOrderByIdService(user.id, orderId!),
        enabled: !!user?.id && !!orderId,
        refetchInterval: (query) => {
            const status = query.state.data?.orderStatus;
            if(status && TERMINAL_STATUSES.includes(status)) return false;
            return 8_000;
        }
    });

    return { order, isLoading };
};

export const useReorder = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const userId = useSelector((state: any) => state.auth.user?.id);

    const { mutate: reorder, isPending: isReordering } = useMutation({
        mutationFn: (orderId: number) => reorderService(userId, orderId),
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['cart', userId] });
            if(data?.skippedItems?.length > 0){
                toast({
                    title: "Some items unavailable",
                    description: `Skipped: ${data.skippedItems.join(', ')}`,
                });
            }
            else{
                toast({ title: "Cart ready!", description: "Your previous order has been added to cart." });
            }
            navigate('/cart');
        },
        onError: (error: any) => {
            toast({
                variant: "destructive",
                title: "Reorder Failed",
                description: error?.response?.data?.message || "Something went wrong"
            });
        }
    });

    return { reorder, isReordering };
};