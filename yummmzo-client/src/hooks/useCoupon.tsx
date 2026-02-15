import { applyCouponService, removeCouponService } from "@/services/cart.services";
import { getCouponsService } from "@/services/coupon.services";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "./use-toast";

export const useCoupon = (restaurantId: number) => {
    // useQueryClient
    const queryClient = useQueryClient();

    // State Variables
    const [couponCode, setCouponCode] = useState("");

    // useQuery
    const { data: couponsData, isLoading: isCouponsLoading } = useQuery({
        queryKey: ["coupons", restaurantId],
        queryFn: () => getCouponsService(restaurantId),
        enabled: !!restaurantId
    });

    // useMutation 
    const applyCouponMutation = useMutation({
        mutationFn: (code: string) => applyCouponService(code),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            setCouponCode("");
            toast({
                variant: 'default',
                title: "Coupon Applied!",
                description: "Successfully applied coupon."
            });
        },
        onError: (error: any) => {
            toast({
                variant: 'destructive',
                title: "Error Applying Coupon!",
                description: error.response?.data?.message || "There is an error applying coupon."
            });
        }
    });

    // Remove coupon
    const removeCouponMutation = useMutation({
        mutationFn: removeCouponService,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cart'] });
            toast({
                variant: 'default',
                title: "Coupon Removed!",
                description: "Successfully removed coupon."
            });
        },
        onError: (error: any) => {
            toast({
                variant: 'destructive',
                title: "Error Removing Coupon!",
                description: error.response?.data?.message || "There is an error removing coupon."
            });
        }
    });

    return {
        couponCode,
        setCouponCode,
        couponsData,
        isCouponsLoading,
        applyCoupon: applyCouponMutation.mutate,
        removeCoupon: removeCouponMutation.mutate,
        isApplying: applyCouponMutation.isPending,
        isRemoving: removeCouponMutation.isPending
    };
};