import { Button } from '../components/ui/Button';

export const Checkout = () => {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-serif text-brand-dark mb-4">Secure Checkout</h1>
        <p className="text-brand-dark/60 font-light">Complete your purchase securely.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Form Column */}
        <div className="lg:col-span-2 space-y-12">
          
          <section>
            <h2 className="text-xl font-serif text-brand-dark mb-6 border-b border-brand-dark/10 pb-4">Contact Information</h2>
            <div className="space-y-4">
              <input type="email" placeholder="Email Address" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
            </div>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-dark mb-6 border-b border-brand-dark/10 pb-4">Shipping Address</h2>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <input type="text" placeholder="First Name" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
              <input type="text" placeholder="Last Name" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
              <input type="text" placeholder="Address" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors col-span-2" />
              <input type="text" placeholder="City" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
              <input type="text" placeholder="Postal Code" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
              <select className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark/70 focus:outline-none focus:border-brand-dark transition-colors col-span-2 appearance-none rounded-none">
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>United Arab Emirates</option>
              </select>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-serif text-brand-dark mb-6 border-b border-brand-dark/10 pb-4">Payment</h2>
            <div className="p-6 border border-brand-dark/10 bg-white">
              <p className="font-light text-sm text-brand-dark/60 mb-4">This is a secure 256-bit encrypted payment.</p>
              <div className="space-y-4">
                 <input type="text" placeholder="Card Number" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
                 <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="MM / YY" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
                    <input type="text" placeholder="CVC" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
                 </div>
                 <input type="text" placeholder="Name on Card" className="w-full border-b border-brand-dark/20 py-3 bg-transparent font-light text-brand-dark placeholder:text-brand-dark/40 focus:outline-none focus:border-brand-dark transition-colors" />
              </div>
            </div>
          </section>

          <Button className="w-full">Complete Pre-Order Inquiry</Button>

        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-brand-beige p-8 sticky top-32">
            <h2 className="text-xl font-serif text-brand-dark mb-6">Order Summary</h2>
            
            <div className="flex gap-4 mb-6 pb-6 border-b border-brand-dark/10">
              <img src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=200&q=80" alt="Product" className="w-20 h-20 object-cover" />
              <div>
                <h3 className="font-serif text-brand-dark">The Royal Kundan Choker</h3>
                <p className="font-sans text-xs text-brand-dark/60 mt-1 uppercase tracking-widest">Qty: 1</p>
                <p className="font-sans text-sm text-brand-dark mt-2">₹ 12,500</p>
              </div>
            </div>

            <div className="space-y-3 font-light text-sm text-brand-dark/80 pb-6 border-b border-brand-dark/10 mb-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ 12,500</span>
              </div>
              <div className="flex justify-between">
                <span>Insured Shipping</span>
                <span>Complimentary</span>
              </div>
              <div className="flex justify-between">
                <span>Taxes</span>
                <span>Calculated at next step</span>
              </div>
            </div>

            <div className="flex justify-between font-serif text-lg text-brand-dark">
              <span>Total</span>
              <span>₹ 12,500</span>
            </div>
            
            <div className="mt-8 text-xs text-brand-dark/50 text-center font-light leading-relaxed">
              By proceeding, you agree to Dharohar's Terms of Service and Privacy Policy. All shipments are fully insured.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
