import { Star } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-orange-50">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center py-16">
          <div>
            <span className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 mb-6">
              👤  Smart Cooking App
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
  <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
    FlavourFlame
  </span>
  . Your daily
  <br />
  kitchen companion.
</h1>
            <p className="text-gray-500 mt-4 max-w-md">
              Create, plan, and shop with ease. Designed to simplify your
              cooking journey every step of the way.
            </p>

            

            <div className="flex items-center gap-3 mt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/32?img=${i}`}
                    alt="user avatar"
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
              <div>
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-xs text-gray-500">10k+ happy with FlavourFlame</p>
              </div>
            </div>
          </div>

          {/* Right side mockup */}
          <div className="relative flex justify-center">
            <div className="bg-white rounded-2xl shadow-xl p-4 w-full max-w-md">
              <div className="flex gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-green-400" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-orange-100 rounded-lg h-20 flex items-center justify-center text-2xl"
                  >
                    🍲
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-16 container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-4xl font-bold text-gray-900">10k+</h3>
            <p className="text-gray-500 mt-2">Recipes explored</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">98%</h3>
            <p className="text-gray-500 mt-2">User satisfaction</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">1,200+</h3>
            <p className="text-gray-500 mt-2">Plans shared weekly</p>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-gray-900">24B</h3>
            <p className="text-gray-500 mt-2">Ingredients tracked</p>
          </div>
        </div>
      </section>

      {/* HEADING SECTION */}
      <section className="py-10 container mx-auto text-center">
        <span className="inline-flex items-center gap-2 border border-gray-200 rounded-full px-4 py-1.5 text-sm text-gray-600 mb-6">
          🍳 Cooking made effortless
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Eat well without the hassle
        </h2>
        <p className="text-gray-500 mt-4 max-w-xl mx-auto">
          From planning to plating, we make every step easier.
        </p>
      </section>
    </>
  );
}