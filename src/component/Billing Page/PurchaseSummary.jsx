import React, { useState } from "react";
import Hr from "../Hr";

export const PurchaseSummarySection = () => {
  const [couponCode, setCouponCode] = useState("");

  const testimonialData = {
    quote:
      "Edubraining truly transformed my skills! The mentorship and projects prepared me for my dream tech job.",
    author: "Aman Singh, Data Analyst",
  };

  const purchaseData = {
    price: 1299,
    discount: 129,
    discountPercent: 10,
    total: 1170,
    savings: 129,
  };

  const handleCouponApply = () => {
    // Handle coupon application logic
    console.log("Applying coupon:", couponCode);
  };

  const handleProceedToPay = () => {
    // Handle payment processing
    console.log("Proceeding to payment");
  };

  return (
    <section
      className="flex flex-col w-[502.4px] items-center gap-10 relative"
      role="main"
      aria-labelledby="purchase-summary-title"
    >
      <div className="flex flex-col items-center gap-10 relative self-stretch w-full flex-[0_0_auto]">
        <blockquote className="flex flex-col w-[473.02px] items-center gap-[24.49px] px-[58px] py-[16.76px] relative flex-[0_0_auto] rounded-[19.33px] border border-solid border-[#484848]">
          <p className="relative w-[473.02px] mt-[-1.00px] ml-[-58.00px] mr-[-58.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[15.5px] text-center tracking-[0] leading-[normal]">
            "{testimonialData.quote}"
          </p>

          <cite className="relative self-stretch [font-family:'Inter-Bold',Helvetica] font-bold text-[#246bfd] text-[15.5px] text-center tracking-[0] leading-[normal] not-italic">
            → {testimonialData.author}
          </cite>
        </blockquote>

        <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <h1
            id="purchase-summary-title"
            className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[32.9px] tracking-[0] leading-[34.1px]"
          >
            Purchase Summary
          </h1>

          <div className="flex flex-col items-start gap-[30.71px] relative self-stretch w-full flex-[0_0_auto]">
            <div
              className="flex flex-col items-start justify-center gap-[26.33px] px-[32.91px] py-[21.94px] relative self-stretch w-full flex-[0_0_auto] rounded-[16.45px] border-[1.1px] border-solid border-white"
              role="region"
              aria-label="Price breakdown"
            >
              <div className="inline-flex flex-col items-start gap-[13.16px] relative flex-[0_0_auto]">
                <div className="flex w-[436.59px] items-center justify-between relative flex-[0_0_auto]">
                  <span className="relative w-fit mt-[-1.10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[17.6px] tracking-[0] leading-[34.1px] whitespace-nowrap">
                    Price
                  </span>

                  <span
                    className="relative w-fit mt-[-1.10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[17.6px] tracking-[0] leading-[34.1px] whitespace-nowrap"
                    aria-label={`Price: ${purchaseData.price} rupees`}
                  >
                    ₹{purchaseData.price}
                  </span>
                </div>

                <div className="flex w-[436.59px] items-start justify-between relative flex-[0_0_auto]">
                  <div className="inline-flex flex-col items-center gap-[3.29px] relative flex-[0_0_auto]">
                    <span className="relative w-fit mt-[-1.10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[17.6px] tracking-[0] leading-[17.6px] whitespace-nowrap">
                      Discount
                    </span>

                    <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-[#246bfd] text-[9.9px] leading-[11.0px] relative w-fit tracking-[0] whitespace-nowrap">
                      ({purchaseData.discountPercent} percent)
                    </span>
                  </div>

                  <span
                    className="text-[#246bfd] text-[17.6px] leading-[17.6px] relative w-fit mt-[-1.10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] whitespace-nowrap"
                    aria-label={`Discount: minus ${purchaseData.discount} rupees`}
                  >
                    - ₹{purchaseData.discount}
                  </span>
                </div>
              </div>

              <div className="flex w-[436.59px] items-start justify-between pt-[35px] pb-0 px-0 relative flex-[0_0_auto] border-t-[1.1px] [border-top-style:solid] border-[#246bfd]">
                <span className="relative w-fit mt-[-1.10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[26.9px] tracking-[0] leading-[34.1px] whitespace-nowrap">
                  Total
                </span>

                <div className="inline-flex flex-col items-center gap-[3.29px] relative flex-[0_0_auto]">
                  <span
                    className="text-white text-[27.4px] leading-[27.4px] relative w-fit mt-[-1.10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold tracking-[0] whitespace-nowrap"
                    aria-label={`Total: ${purchaseData.total} rupees`}
                  >
                    ₹{purchaseData.total}
                  </span>

                  <div className="inline-flex items-center justify-center gap-[17.55px] px-[10.97px] py-0 relative flex-[0_0_auto] bg-[linear-gradient(90deg,rgba(36,107,253,1)_0%,rgba(0,80,245,0)_100%)]">
                    <span
                      className="relative w-fit mt-[-1.76px] [font-family:'Inter-Regular',Helvetica] font-normal text-white text-[10.5px] tracking-[0] leading-[17.6px] whitespace-nowrap"
                      aria-label={`You are saving ${purchaseData.savings} rupees`}
                    >
                      Saving ₹{purchaseData.savings}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            
              <div className="relative w-full text-white">
                <input placeholder="Apply Coupon code"
                className="flex items-center justify-between px-[32.91px] py-[21.94px] relative self-stretch w-full flex-[0_0_auto] rounded-[16.45px] placeholder:text-gray-200  text-md border-[1.1px] border-solid border-gray-200"
              ></input>

              <button
                type="button"
                onClick={handleCouponApply}
                className="absolute top-5 right-10  w-fit mt-[-1.10px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-[#0356ff] text-[21.9px] tracking-[0] leading-[34.1px] whitespace-nowrap hover:text-[#246bfd] focus:outline-none focus:ring-2 focus:ring-[#246bfd] focus:ring-opacity-50 transition-colors duration-200"
                aria-label="Apply coupon code"
              >
                Apply
              </button>
              </div>
            </div>
         
        </div>
      </div>

      <button
        type="button"
        onClick={handleProceedToPay}
        className="inline-flex h-[55px] items-center justify-center px-[50px] py-0 relative rounded-[15px] bg-[linear-gradient(90deg,rgba(114,160,255,1)_0%,rgba(36,108,255,1)_48%,rgba(0,84,255,1)_100%)] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#246bfd] focus:ring-opacity-50 transition-opacity duration-200"
        aria-label="Proceed to payment"
      >
        <span className="relative w-fit [font-family:'Roboto-Medium',Helvetica] font-medium text-white text-[22.7px] tracking-[0] leading-[34px] whitespace-nowrap">
          Proceed to pay
        </span>
      </button>

      <Hr></Hr>
      <div className="flex justify-between gap-10 items-center w-full">
        <img src="secure.png" className="w-[117.53px] h-[43.08px] "></img>
        <img src="secure2.png" className="w-[117.53px] h-[43.08px] "></img>
        <img src="razorpay.png" className="w-[117.53px] h-[43.08px] "></img>
      </div>
    </section>
  );
};
