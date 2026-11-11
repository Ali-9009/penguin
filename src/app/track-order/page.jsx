"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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

function TrackingPhone({ phase, order, currentStep, progress }) {
  return (
    <aside
      aria-label="Order tracking preview"
      className="mx-auto w-full max-w-[390px] min-w-0 lg:max-w-none"
    >
      <div className="relative rounded-[42px] border-[2px] border-[#07558F] bg-[#EAF3F7] p-[8px] shadow-[0_25px_65px_rgba(7,59,104,0.12)] sm:rounded-[48px]">
        <div className="flex min-h-[630px] flex-col overflow-hidden rounded-[34px] border border-[#E0EAF0] bg-white sm:rounded-[40px] lg:min-h-[650px]">
          <div className="bg-[linear-gradient(145deg,#FFFFFF_0%,#F2FAFC_100%)] px-5 pt-3 pb-5 sm:px-6">
            <div className="mx-auto h-[18px] w-[90px] rounded-full border border-[#DFE6EA] bg-[#F5F7F8]" />

            <div className="mt-7">
              <Link
                href="/"
                aria-label="Penguin Peptides homepage"
                className="inline-block"
              >
                <Image
                  src="/assets/penguin-logo.png"
                  alt="Penguin Peptides"
                  width={190}
                  height={90}
                  priority
                  className="h-auto w-[155px] object-contain object-left sm:w-[180px]"
                />
              </Link>
            </div>

            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-[11px] font-semibold text-[#173B4A]">
                Your order, connected.
              </p>

              <LockKeyhole
                size={16}
                strokeWidth={1.8}
                className="text-primary shrink-0"
              />
            </div>
          </div>

          <div className="h-[2px] w-full bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))]" />

          <div className="flex min-h-0 flex-1 flex-col">
            {phase === "idle" && (
              <div className="flex min-h-[410px] flex-1 flex-col items-center justify-center px-5 py-10 text-center">
                <span className="bg-primary flex size-[62px] items-center justify-center rounded-full text-white shadow-[0_10px_24px_rgba(7,85,143,0.18)]">
                  <Search size={27} strokeWidth={1.9} />
                </span>

                <p className="text-secondary mt-7 text-[10px] font-bold tracking-[0.18em] uppercase">
                  Order Tracking
                </p>

                <h3 className="font-heading text-primary mt-4 text-[25px] leading-tight font-bold tracking-[-0.04em]">
                  Ready to track
                </h3>

                <p className="mt-4 max-w-[280px] text-[12px] leading-7 text-[#718A96]">
                  Enter the two details used at checkout. Your order appears
                  here when both match.
                </p>

                <div className="mt-8 w-full max-w-[290px]">
                  <div className="flex items-center gap-3 border-t border-[#E4EBEF] py-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#D7E4EA] text-[10px] font-medium text-[#718A96]">
                      1
                    </span>

                    <p className="text-left text-[11px] font-medium text-[#617987]">
                      Order number needed
                    </p>
                  </div>

                  <div className="flex items-center gap-3 border-t border-[#E4EBEF] py-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#D7E4EA] text-[10px] font-medium text-[#718A96]">
                      2
                    </span>

                    <p className="text-left text-[11px] font-medium text-[#617987]">
                      Billing email needed
                    </p>
                  </div>
                </div>
              </div>
            )}

            {phase === "loading" && (
              <div className="flex min-h-[410px] flex-1 flex-col items-center justify-center px-5 py-10 text-center">
                <div className="flex size-[68px] items-center justify-center rounded-full bg-[#EDF7FA]">
                  <div className="border-t-primary h-9 w-9 animate-spin rounded-full border-[3px] border-[#D6EAF0]" />
                </div>

                <p className="text-secondary mt-7 text-[10px] font-bold tracking-[0.16em] uppercase">
                  Order Tracking
                </p>

                <h3 className="font-heading text-primary mt-4 text-[23px] font-bold">
                  Finding your order
                </h3>

                <p className="mt-3 max-w-[260px] text-[12px] leading-7 text-[#718A96]">
                  Checking your order details.
                </p>
              </div>
            )}

            {phase === "missing" && (
              <div className="flex min-h-[410px] flex-1 flex-col items-center justify-center px-5 py-10 text-center">
                <span className="text-primary flex size-[64px] items-center justify-center rounded-full bg-[#EDF7FA]">
                  <Search size={27} strokeWidth={1.8} />
                </span>

                <p className="text-secondary mt-7 text-[10px] font-bold tracking-[0.16em] uppercase">
                  Order Tracking
                </p>

                <h3 className="font-heading text-primary mt-4 text-[24px] font-bold">
                  Order not found
                </h3>

                <p className="mt-3 max-w-[260px] text-[12px] leading-7 text-[#718A96]">
                  Please check your order number and billing email, then try
                  again.
                </p>
              </div>
            )}

            {phase === "found" && order && (
              <div className="max-h-[570px] min-h-0 flex-1 [scrollbar-width:thin] overflow-y-auto px-4 py-6 sm:px-5">
                <div className="text-center">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#D7EBF0] bg-[#F1F9FB] px-3 py-1.5">
                    <span className="bg-secondary size-1.5 rounded-full" />

                    <span className="text-primary text-[9px] font-bold tracking-[0.12em] uppercase">
                      Order Tracking
                    </span>
                  </span>

                  <h3 className="font-heading text-primary mt-4 text-[23px] font-bold tracking-[-0.04em]">
                    {statusLabels[order.status]}
                  </h3>

                  <p className="mt-2 text-[11px] text-[#718A96]">
                    Order #{order.id}
                  </p>
                </div>

                <div className="mt-6 rounded-[16px] border border-[#DCE8ED] bg-[#F5FAFC] p-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-semibold text-[#718A96]">
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
                    className="mt-3 h-1.5 overflow-hidden rounded-full bg-[#DCE8ED]"
                  >
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-primary),var(--color-secondary))] transition-[width] duration-700"
                      style={{ width: `${progress}%` }}
                    />
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#DFEAF0] pt-3">
                    <div>
                      <p className="text-[9px] text-[#8BA0AA]">Carrier</p>

                      <p className="text-primary mt-1 text-[11px] font-semibold">
                        {order.carrier}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[9px] text-[#8BA0AA]">Delivery</p>

                      <p className="text-primary mt-1 text-[11px] font-semibold">
                        {order.eta}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="mb-5 flex items-center justify-between">
                    <h4 className="font-heading text-primary text-[14px] font-bold">
                      Shipment Journey
                    </h4>

                    <span className="text-[10px] text-[#8BA0AA]">
                      {currentStep + 1}/{STEPS.length}
                    </span>
                  </div>

                  <ol>
                    {STEPS.map((step, index) => {
                      const Icon = step.icon;
                      const completed = index < currentStep;
                      const current = index === currentStep;
                      const reached = index <= currentStep;
                      const last = index === STEPS.length - 1;

                      return (
                        <li key={step.key} className="flex gap-3">
                          <div className="flex flex-col items-center">
                            <span
                              className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border ${
                                reached
                                  ? "border-primary bg-primary text-white"
                                  : "border-[#DCE8ED] bg-[#F7FAFC] text-[#A1B3BB]"
                              }`}
                            >
                              <Icon size={15} strokeWidth={1.8} />
                            </span>

                            {!last && (
                              <div
                                className={`h-11 w-[2px] ${
                                  completed ? "bg-primary" : "bg-[#E2EBEF]"
                                }`}
                              />
                            )}
                          </div>

                          <div className="min-w-0 flex-1 pt-1.5">
                            <div className="flex flex-wrap items-center gap-2">
                              <p
                                className={`text-[11px] font-semibold ${
                                  reached ? "text-primary" : "text-[#98ABB5]"
                                }`}
                              >
                                {step.label}
                              </p>

                              {current && (
                                <span className="text-secondary rounded-full bg-[#E7F5F8] px-2 py-0.5 text-[8px] font-bold">
                                  {last ? "Completed" : "Current"}
                                </span>
                              )}
                            </div>

                            <p className="mt-1 text-[10px] leading-[1.6] text-[#8299A4]">
                              {step.description}
                            </p>
                          </div>
                        </li>
                      );
                    })}
                  </ol>
                </div>

                <div className="mt-6 rounded-[15px] border border-[#DCE8ED] bg-[#F8FBFC] p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Package size={16} className="text-secondary" />

                    <h4 className="text-primary text-[12px] font-bold">
                      Order Items
                    </h4>
                  </div>

                  <div className="space-y-2">
                    {order.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center justify-between gap-3"
                      >
                        <span className="text-[11px] text-[#617987]">
                          {item.name}
                        </span>

                        <span className="text-primary text-[10px] font-semibold">
                          ×{item.qty}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="mt-5 text-center text-[10px] leading-5 text-[#8299A4]">
                  Demonstration tracking only. Not live carrier information.
                </p>
              </div>
            )}
          </div>

          <div className="mt-auto flex items-center justify-center border-t border-[#E8F0F3] bg-[#F8FBFC] py-4">
            <div className="flex items-center gap-2">
              <LockKeyhole size={13} className="text-secondary" />

              <span className="text-[9px] font-bold tracking-[0.1em] text-[#617987] uppercase">
                Secure Order Record
              </span>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

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
    <main className="min-h-screen bg-[#F8FBFC]">
      <section className="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,7fr)_minmax(0,3fr)] lg:gap-8 xl:gap-12">
          <div className="min-w-0 lg:pt-12 xl:pt-16">
            <div className="max-w-[700px]">
              <p className="text-primary mb-4 inline-flex items-center gap-2 rounded-full border border-[#DCE8ED] bg-white px-4 py-2 text-[11px] font-bold tracking-[0.12em] uppercase">
                <span className="bg-secondary size-1.5 rounded-full" />
                Order Tracking
              </p>

              <h1 className="section-heading">
                Track your order,{" "}
                <span className="text-secondary">live.</span>
              </h1>

              <p className="mt-6 max-w-[590px] text-md leading-8 text-[#617987]">
                Enter the order number from your confirmation and the billing
                email used at checkout. Your verified order status appears in
                the phone.
              </p>
            </div>

            <div className="mt-10 max-w-[700px] overflow-hidden rounded-[22px] border border-[#DCE8ED] bg-white shadow-[0_15px_45px_rgba(7,59,104,0.06)] sm:mt-12 sm:rounded-[26px]">
              <div className="flex items-center gap-3 px-5 pt-6 sm:px-7 sm:pt-7">
                <span className="text-primary flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FA]">
                  <Package size={21} strokeWidth={1.8} />
                </span>

                <div>
                  <h2 className="font-heading text-primary text-[18px] font-bold tracking-[-0.025em] sm:text-[20px]">
                    Find your order
                  </h2>

                  <p className="mt-1 text-[12px] text-[#718A96]">
                    Both details must match the same record.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="p-5 sm:p-7">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="order-number"
                      className="mb-2 block text-[11px] font-bold tracking-[0.08em] text-[#173B4A] uppercase"
                    >
                      Order Number
                    </label>

                    <div className="relative">
                      <Search
                        size={17}
                        className="text-secondary pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
                      />

                      <input
                        id="order-number"
                        type="text"
                        required
                        value={orderNumber}
                        onChange={(event) => setOrderNumber(event.target.value)}
                        placeholder="e.g. ORD-1042"
                        autoComplete="off"
                        className="text-primary focus:border-primary focus:ring-primary/10 h-12 w-full rounded-xl border border-[#DCE8ED] bg-[#F8FBFC] pr-4 pl-11 text-[13px] transition-all duration-200 outline-none placeholder:text-[#9AADB7] focus:bg-white focus:ring-2"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="billing-email"
                      className="mb-2 block text-[11px] font-bold tracking-[0.08em] text-[#173B4A] uppercase"
                    >
                      Billing Email
                    </label>

                    <div className="relative">
                      <Mail
                        size={17}
                        className="text-secondary pointer-events-none absolute top-1/2 left-4 -translate-y-1/2"
                      />

                      <input
                        id="billing-email"
                        type="email"
                        required
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="you@example.com"
                        autoComplete="email"
                        className="text-primary focus:border-primary focus:ring-primary/10 h-12 w-full rounded-xl border border-[#DCE8ED] bg-[#F8FBFC] pr-4 pl-11 text-[13px] transition-all duration-200 outline-none placeholder:text-[#9AADB7] focus:bg-white focus:ring-2"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={phase === "loading"}
                  className="group relative mt-5 flex h-12 w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-[linear-gradient(110deg,var(--color-primary),var(--color-secondary))] px-6 text-[13px] font-semibold text-white shadow-md transition-all duration-500 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,var(--color-primary-dark),var(--color-primary))] opacity-0 transition-opacity duration-500 group-hover:opacity-100 group-disabled:opacity-0" />

                  {phase === "loading" ? (
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="size-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Finding your order...
                    </span>
                  ) : (
                    <>
                      <span className="relative z-10">Track my order</span>

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

                <div className="mt-5 flex items-start gap-2">
                  <LockKeyhole
                    size={14}
                    className="text-secondary mt-0.5 shrink-0"
                  />

                  <p className="text-[11px] leading-5 text-[#718A96]">
                    Your details are used for this lookup and are not saved on
                    this page.
                  </p>
                </div>
              </form>
            </div>

            <div className="mt-5 max-w-[700px] rounded-[18px] border border-[#DCE8ED] bg-[#EDF7FA] p-5 sm:p-6">
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

            <p className="mt-5 px-1 text-[11px] leading-6 text-[#8299A4]">
              Demo tracking: Try{" "}
              <strong className="text-primary">ORD-1042</strong> with{" "}
              <strong className="text-primary">demo@yourshop.com</strong>.
            </p>
          </div>

          <div className="min-w-0 lg:sticky lg:top-24">
            <TrackingPhone
              phase={phase}
              order={order}
              currentStep={currentStep}
              progress={progress}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
