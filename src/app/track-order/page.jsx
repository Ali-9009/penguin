"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  CheckCircle2,
  Clock3,
  LockKeyhole,
  Mail,
  MapPin,
  Package,
  PackageCheck,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";

const DEMO_ORDERS = [
  {
    id: "ORD-1042",
    email: "demo@yourshop.com",
    status: "out_for_delivery",
    carrier: "Demo carrier",
    eta: "Not available",
    items: [{ name: "BPC-157", qty: 1 }],
  },
  {
    id: "ORD-1033",
    email: "sara@example.com",
    status: "shipped",
    carrier: "Demo carrier",
    eta: "Not available",
    items: [{ name: "TB-500", qty: 1 }],
  },
  {
    id: "ORD-1001",
    email: "ali@example.com",
    status: "delivered",
    carrier: "Demo carrier",
    eta: "Delivered (demo)",
    items: [{ name: "GHK-Cu", qty: 1 }],
  },
];

const STEPS = [
  {
    key: "placed",
    label: "Order Placed",
    description: "Your order has been received.",
    icon: Package,
  },
  {
    key: "packed",
    label: "Packed",
    description: "Your order is prepared for shipping.",
    icon: PackageCheck,
  },
  {
    key: "shipped",
    label: "Shipped",
    description: "Your package is on its way.",
    icon: Truck,
  },
  {
    key: "out_for_delivery",
    label: "Out for Delivery",
    description: "Your package is with the delivery carrier.",
    icon: MapPin,
  },
  {
    key: "delivered",
    label: "Delivered",
    description: "Your package has arrived.",
    icon: Check,
  },
];

const statusLabels = {
  placed: "Order Placed",
  packed: "Order Packed",
  shipped: "On Its Way",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
};

export default function OrderTracker() {
  const [orderNumber, setOrderNumber] = useState("");
  const [email, setEmail] = useState("");
  const [order, setOrder] = useState(null);
  const [phase, setPhase] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!orderNumber.trim() || !email.trim()) return;

    setPhase("loading");
    setOrder(null);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const number = orderNumber.trim().replace(/^#/, "").toLowerCase();
    const billingEmail = email.trim().toLowerCase();

    const found = DEMO_ORDERS.find(
      (item) =>
        (item.id.toLowerCase() === number ||
          item.id.toLowerCase().replace("ord-", "") === number) &&
        item.email.toLowerCase() === billingEmail,
    );

    setOrder(found || null);
    setPhase(found ? "found" : "missing");
  }

  const currentStep = order
    ? STEPS.findIndex((step) => step.key === order.status)
    : -1;

  const progress =
    currentStep >= 0 ? (currentStep / (STEPS.length - 1)) * 100 : 0;

  return (
    <main className="min-h-screen bg-[#F7FAFC]">
      <section className="border-b border-[#DFEAF0] bg-white px-4 py-12 sm:px-6 md:py-12 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="font-heading text-primary text-[36px] leading-[1.12] font-bold tracking-[-0.045em] sm:text-[48px] lg:text-[54px]">
            Track Your <span className="text-secondary">Order.</span>
          </h1>

          <p className="mt-4 max-w-xl text-[13px] leading-7 text-[#647D89] sm:text-[15px]">
            Enter your order details to view its current status and follow your
            package through each delivery stage.
          </p>
        </div>
      </section>

      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          <div className="space-y-6">
            <div className="overflow-hidden rounded-[24px] border border-[#DFEAF0] bg-white shadow-[0_12px_45px_rgba(7,59,104,0.04)]">
              <div className="border-b border-[#EDF2F5] px-5 py-6 sm:px-7 sm:py-7">
                <div className="flex items-center gap-3">
                  <span className="text-primary flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF6F9]">
                    <Search size={21} strokeWidth={1.8} />
                  </span>

                  <div>
                    <h2 className="font-heading text-primary text-[19px] font-bold tracking-[-0.025em] sm:text-[21px]">
                      Find Your Order
                    </h2>

                    <p className="mt-1 text-[12px] text-[#7A909B]">
                      Enter your order number and billing email.
                    </p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-7">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor="order-number"
                      className="mb-2 block text-[13px] font-semibold text-[#173B4A]"
                    >
                      Order Number
                    </label>

                    <div className="relative">
                      <Package
                        size={18}
                        strokeWidth={1.8}
                        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#8BA2AD]"
                      />

                      <input
                        id="order-number"
                        type="text"
                        required
                        value={orderNumber}
                        onChange={(event) => setOrderNumber(event.target.value)}
                        placeholder="e.g. ORD-1042"
                        autoComplete="off"
                        className="focus:border-primary focus:ring-primary/10 h-12 w-full rounded-xl border border-[#DCE8ED] bg-[#FAFCFD] pr-4 pl-11 text-[13px] text-[#173B4A] transition-all duration-200 outline-none placeholder:text-[#9AAFB8] focus:bg-white focus:ring-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="billing-email"
                      className="mb-2 block text-[13px] font-semibold text-[#173B4A]"
                    >
                      Billing Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={18}
                        strokeWidth={1.8}
                        className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-[#8BA2AD]"
                      />

                      <input
                        id="billing-email"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="focus:border-primary focus:ring-primary/10 h-12 w-full rounded-xl border border-[#DCE8ED] bg-[#FAFCFD] pr-4 pl-11 text-[13px] text-[#173B4A] transition-all duration-200 outline-none placeholder:text-[#9AAFB8] focus:bg-white focus:ring-2"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={phase === "loading"}
                  className="group relative mt-6 flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-6 text-[13px] font-semibold text-white shadow-md transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 group-disabled:opacity-0" />

                  {phase === "loading" ? (
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Finding Your Order...
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10">Track My Order</span>

                      <ArrowRight
                        size={17}
                        className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>

                {phase === "missing" && (
                  <p
                    role="alert"
                    className="mt-4 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-[12px] leading-6 text-red-600"
                  >
                    No matching demo order was found. Please check your order
                    number and email address.
                  </p>
                )}

                <div className="mt-6 flex items-start gap-2 border-t border-[#EDF2F5] pt-5">
                  <LockKeyhole
                    size={15}
                    className="mt-0.5 shrink-0 text-[#8299A4]"
                  />

                  <p className="text-[11px] leading-5 text-[#8299A4]">
                    Your order details are only displayed when the order number
                    and billing email match.
                  </p>
                </div>
              </form>
            </div>

            <div className="rounded-[20px] border border-[#D9EAF0] bg-[#EDF7FA] p-5 sm:p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={20}
                  className="text-primary mt-0.5 shrink-0"
                  strokeWidth={1.8}
                />

                <div>
                  <h3 className="font-heading text-primary text-[14px] font-bold">
                    Need Help With Your Order?
                  </h3>

                  <p className="mt-2 text-[12px] leading-6 text-[#617987]">
                    If you have questions about your shipment, our support team
                    can help.
                  </p>

                  <Link
                    href="/contact"
                    className="text-primary hover:text-secondary mt-3 inline-flex items-center gap-2 text-[12px] font-semibold transition-colors"
                  >
                    Contact Support
                    <ArrowUpRight size={15} />
                  </Link>
                </div>
              </div>
            </div>

            <p className="px-1 text-[11px] leading-6 text-[#8299A4]">
              Demo tracking: Try{" "}
              <strong className="text-primary">ORD-1042</strong> with{" "}
              <strong className="text-primary">demo@yourshop.com</strong>.
            </p>
          </div>

          <div className="overflow-hidden rounded-[24px] border border-[#DFEAF0] bg-white shadow-[0_12px_45px_rgba(7,59,104,0.04)]">
            <div className="flex items-center justify-between gap-4 border-b border-[#EDF2F5] px-5 py-5 sm:px-7 sm:py-6">
              <div>
                <p className="text-secondary text-[10px] font-bold tracking-[0.15em] uppercase">
                  Shipment Status
                </p>

                <h2 className="font-heading text-primary mt-1 text-[19px] font-bold tracking-[-0.03em] sm:text-[21px]">
                  Tracking Details
                </h2>
              </div>

              <span className="text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF6F9]">
                <Truck size={20} strokeWidth={1.8} />
              </span>
            </div>

            <div className="p-5 sm:p-7">
              {phase === "idle" && (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#DCE8ED] bg-[#F1F8FA]">
                    <Package
                      size={36}
                      strokeWidth={1.3}
                      className="text-primary"
                    />
                  </div>

                  <h3 className="font-heading text-primary mt-6 text-[22px] font-bold tracking-[-0.03em]">
                    Ready to Track
                  </h3>

                  <p className="mt-3 max-w-[290px] text-[13px] leading-7 text-[#718A96]">
                    Enter your order details to see its current status and
                    delivery progress.
                  </p>

                  <div className="mt-8 flex items-center gap-3 rounded-full border border-[#DCE8ED] bg-[#F7FBFC] px-4 py-2.5">
                    <LockKeyhole size={14} className="text-secondary" />

                    <span className="text-[11px] font-medium text-[#718A96]">
                      Secure Order Lookup
                    </span>
                  </div>
                </div>
              )}

              {phase === "loading" && (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#EDF7FA]">
                    <div className="border-t-primary h-8 w-8 animate-spin rounded-full border-[3px] border-[#D6EAF0]" />
                  </div>

                  <h3 className="font-heading text-primary mt-6 text-[20px] font-bold">
                    Looking Up Your Order
                  </h3>

                  <p className="mt-2 text-[13px] text-[#718A96]">
                    Checking the available tracking details.
                  </p>
                </div>
              )}

              {phase === "missing" && (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <div className="text-primary flex h-20 w-20 items-center justify-center rounded-[24px] bg-[#F1F8FA]">
                    <Search size={32} strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading text-primary mt-6 text-[22px] font-bold">
                    Order Not Found
                  </h3>

                  <p className="mt-3 max-w-[300px] text-[13px] leading-7 text-[#718A96]">
                    We couldn't find a matching demo order. Please double-check
                    your details and try again.
                  </p>
                </div>
              )}

              {phase === "found" && order && (
                <div>
                  <div className="rounded-[18px] border border-[#DCE8ED] bg-[#F5FAFC] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="text-[11px] font-medium text-[#718A96]">
                        Order #{order.id}
                      </span>

                      <span className="inline-flex items-center gap-1.5 rounded-full border border-[#CBE5DD] bg-[#EAF8F1] px-3 py-1.5 text-[10px] font-semibold text-emerald-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        Demo Order
                      </span>
                    </div>

                    <h3 className="font-heading text-primary mt-4 text-[25px] font-bold tracking-[-0.035em] sm:text-[29px]">
                      {statusLabels[order.status]}
                    </h3>

                    <p className="mt-2 text-[12px] text-[#718A96]">
                      {order.carrier} · {order.eta}
                    </p>

                    <div className="mt-6">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-[#718A96]">
                          Delivery Progress
                        </span>

                        <span className="text-primary text-[11px] font-bold">
                          {Math.round(progress)}%
                        </span>
                      </div>

                      <div
                        role="progressbar"
                        aria-label="Order delivery progress"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        className="h-2 overflow-hidden rounded-full bg-[#DCE8ED]"
                      >
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))] transition-[width] duration-700 ease-out"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="mb-6 flex items-center justify-between">
                      <h4 className="font-heading text-primary text-[16px] font-bold">
                        Shipment Journey
                      </h4>

                      <span className="text-[11px] text-[#8BA0AA]">
                        {currentStep + 1} of {STEPS.length}
                      </span>
                    </div>

                    <ol className="space-y-0">
                      {STEPS.map((step, index) => {
                        const Icon = step.icon;
                        const completed = index < currentStep;
                        const current = index === currentStep;
                        const reached = index <= currentStep;
                        const last = index === STEPS.length - 1;

                        return (
                          <li key={step.key} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <span
                                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                  reached
                                    ? "border-primary bg-primary text-white"
                                    : "border-[#DCE8ED] bg-[#F7FAFC] text-[#A1B3BB]"
                                }`}
                              >
                                <Icon size={18} strokeWidth={1.8} />
                              </span>

                              {!last && (
                                <div
                                  className={`h-14 w-[2px] ${
                                    completed ? "bg-primary" : "bg-[#E2EBEF]"
                                  }`}
                                />
                              )}
                            </div>

                            <div className="min-w-0 flex-1 pt-1.5">
                              <div className="flex flex-wrap items-center gap-2">
                                <p
                                  className={`text-[13px] font-semibold sm:text-[14px] ${
                                    reached ? "text-primary" : "text-[#98ABB5]"
                                  }`}
                                >
                                  {step.label}
                                </p>

                                {current && (
                                  <span className="text-secondary rounded-full bg-[#E7F5F8] px-2.5 py-1 text-[9px] font-bold">
                                    {last ? "Completed" : "Current"}
                                  </span>
                                )}
                              </div>

                              <p
                                className={`mt-1 text-[11px] leading-5 ${
                                  reached ? "text-[#718A96]" : "text-[#ACBBC2]"
                                }`}
                              >
                                {step.description}
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </div>

                  <div className="mt-7 rounded-[18px] border border-[#DFEAF0] bg-[#F8FBFC] p-4 sm:p-5">
                    <div className="mb-4 flex items-center gap-2">
                      <Package size={17} className="text-secondary" />

                      <h4 className="text-primary text-[13px] font-bold">
                        Order Items
                      </h4>
                    </div>

                    <div className="space-y-3">
                      {order.items.map((item) => (
                        <div
                          key={item.name}
                          className="flex items-center justify-between gap-3"
                        >
                          <span className="text-[12px] text-[#617987]">
                            {item.name}
                          </span>

                          <span className="text-primary rounded-lg border border-[#DCE8ED] bg-white px-2.5 py-1 text-[11px] font-semibold">
                            Qty: {item.qty}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex items-start gap-2">
                    <Clock3
                      size={15}
                      className="text-secondary mt-0.5 shrink-0"
                    />

                    <p className="text-[11px] leading-5 text-[#8299A4]">
                      This is a demonstration order. Shipping stages reflect
                      sample data, not live carrier updates.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
