import { addCartItemService, clearCartService, getCartService, updateCartItemService } from "@/services/cart.services";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "./use-toast";

export const useCart = () => {
    // useQueryClient
    const queryClient = useQueryClient();

    // State Variables
    const [conflictError , setConflictError] = useState(false);

    // useQuery
    const { data: cartData , isLoading: isCartLoading} = useQuery({
        queryKey: ["cart"],
        queryFn: getCartService
    });

    // useMutation
    const addItemMutation = useMutation({
        mutationFn: addCartItemService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
        onError: (error: any) => {
            if (error.response?.status === 409) {
                setConflictError(true);
                return;
            }
            toast({
                variant: 'destructive',
                title: "Error Adding Item!",
                description: "There's an error adding item in the cart."
            });
        }
    });

    const updateItemMutation = useMutation({
        mutationFn: updateCartItemService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
        onError: (error: any) => {
            toast({
                variant: 'destructive',
                title: "Error Updating Item!",
                description: "There's an error updating item in the cart."
            });
        }
    });

    const clearCartMutation = useMutation({
        mutationFn: clearCartService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
        },
        onError: (error: any) => {
            toast({
                variant: 'destructive',
                title: "Error Clearing Cart!",
                description: "There's an error clearing cart."
            });
        }
    });

    // Helper Function
    function getItemQuantity(menuItemId: number): number {
        const item = cartData?.items?.find((item: any) => item.menuItemId === menuItemId);
        return item ? item.quantity : 0;
    };

    return {
        cartData,
        isCartLoading,
        conflictError,
        setConflictError,
        addItem: addItemMutation.mutateAsync,
        updateItem: updateItemMutation.mutate,
        clearCart: clearCartMutation.mutateAsync,
        getItemQuantity
    };
};