export default function ContactUs() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-md mx-auto">
            Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="card bg-base-100 shadow-xl border border-gray-100">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-6 text-gray-900">
                Send us a message
              </h3>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="label">
                      <span className="label-text font-medium text-gray-700">
                        Full Name
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="input input-bordered w-full bg-white focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="label">
                      <span className="label-text font-medium text-gray-700">
                        Email Address
                      </span>
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="input input-bordered w-full bg-white focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-medium text-gray-700">
                      Subject
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="How can we help you?"
                    className="input input-bordered w-full bg-white focus:border-primary"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text font-medium text-gray-700">
                      Message
                    </span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered w-full h-32 bg-white focus:border-primary"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-full text-white font-semibold text-lg h-12"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information + Social Media */}
          <div className="space-y-8">
            <div className="card bg-base-100 shadow-xl border border-gray-100">
              <div className="card-body">
                <h3 className="card-title text-xl mb-6">Contact Information</h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      ✉️
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email Us</p>
                      <a
                        href="mailto:hello@yourcompany.com"
                        className="text-primary hover:underline"
                      >
                        fr.anujpaul@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      📞
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Call Us</p>
                      <a
                        href="tel:+8801234567890"
                        className="text-primary hover:underline"
                      >
                        +8801646267167
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      📍
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Visit Us</p>
                      <p className="text-gray-600">
                        123 Business Street,
                        <br />
                        Sylhet, Bangladesh
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="font-medium text-gray-700 mb-4">Follow Us</p>
                  <div className="flex gap-4">
                    <a
                      href="https://facebook.com/yourpage"
                      target="_blank"
                      className="w-11 h-11 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl flex items-center justify-center transition-colors text-2xl"
                    >
                      f
                    </a>
                    <a
                      href="https://instagram.com/yourpage"
                      target="_blank"
                      className="w-11 h-11 bg-gradient-to-br from-pink-500 to-purple-600 hover:brightness-110 text-white rounded-2xl flex items-center justify-center transition-all text-2xl"
                    >
                      📷
                    </a>
                    <a
                      href="https://twitter.com/yourpage"
                      target="_blank"
                      className="w-11 h-11 bg-black hover:bg-gray-800 text-white rounded-2xl flex items-center justify-center transition-colors text-2xl"
                    >
                      𝕏
                    </a>
                    <a
                      href="https://linkedin.com/company/yourpage"
                      target="_blank"
                      className="w-11 h-11 bg-blue-700 hover:bg-blue-800 text-white rounded-2xl flex items-center justify-center transition-colors text-2xl"
                    >
                      𝕚
                    </a>
                    <a
                      href="https://youtube.com/yourchannel"
                      target="_blank"
                      className="w-11 h-11 bg-red-600 hover:bg-red-700 text-white rounded-2xl flex items-center justify-center transition-colors text-2xl"
                    >
                      ▶
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
