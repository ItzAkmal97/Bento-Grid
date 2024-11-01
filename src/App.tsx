import img1 from './assets/illustration-ai-content.webp';
import img2 from './assets/illustration-audience-growth.webp';
import img3 from './assets/illustration-consistent-schedule.webp';
import img4 from './assets/illustration-create-post.webp';
import img5 from './assets/illustration-five-stars.webp';
import img6 from './assets/illustration-grow-followers.webp';
import img7 from './assets/illustration-multiple-platforms.webp';
import img8 from './assets/illustration-schedule-posts.webp';
function App() {

  return (
    <>
    <main className="bg-gray-200 font-sans min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 auto-rows-auto">
          {/* Feature Block - Dark */}
          <div className="bg-slate-900 p-8 rounded-2xl md:col-span-2 lg:col-span-2 xl:col-span-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex flex-col items-center gap-4 lg:gap-6 xl:pt-24 xl:gap-8">
              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-center">
                Social Media <span className="text-yellow-500">10x</span> <i>Faster</i> with AI
              </h1>
              <img src={img5} alt="5 stars" className="w-44 sm:w-48 md:w-52 lg:w-56 xl:60"/>
              <p className="text-gray-200 text-lg md:text-xl lg:text-2xl xl:text-3xl">Over 4,000 5-star reviews</p>
            </div>
          </div>

          {/* Multiple Platforms */}
          <div className="bg-gray-100 p-6 rounded-2xl flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <img src={img7} alt="multiple platforms" className="w-full mb-4 bg-transparent" />
            <h2 className="text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Manage multiple accounts and platforms.
            </h2>
          </div>

          {/* Consistent Schedule */}
          <div className="bg-orange-300 p-6 rounded-2xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 leading-none">
              Maintain a consistent posting schedule.
            </h2>
            <img src={img3} alt="consistent schedule" className="w-48 mt-36 sm:w-56 md:w-56 lg:w-60" />
          </div>

          {/* Schedule Posts */}
          <div className="bg-purple-200 p-6 rounded-2xl flex flex-col items-center gap-4 lg:col-span-2 xl:col-span-1 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold text-center">
              Schedule to social media.
            </h2>
            <img src={img8} alt="schedule-posts" className="w-full max-w-xs object-contain" />
            <p className="text-lg md:text-xl text-center">
              Optimize post timings to publish content at the perfect time for your audience.
            </p>
          </div>

          {/* Grow Followers */}
          <div className="bg-purple-500 p-6 rounded-2xl flex flex-col items-center gap-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <img src={img6} alt="grow followers" className="w-full max-w-xs object-contain" />
            <h2 className="text-white text-xl md:text-3xl lg:text-3xl xl:text-4xl text-center">
              Grow followers with non-stop content.
            </h2>
          </div>

          {/* Stats Block */}
          <div className="bg-white p-6 rounded-2xl flex flex-col justify-between shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div>
              <h2 className="text-gray-900 text-4xl md:text-5xl font-bold">&gt;56%</h2>
              <p className="text-lg md:text-xl mt-2">faster audience growth</p>
            </div>
            <img src={img2} alt="audience growth" className="w-32 md:w-44 mt-4" />
          </div>

          {/* Create Content */}
          <div className="bg-yellow-100 p-6 rounded-2xl flex flex-col justify-between lg:pt-8 lg:row-span-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-gray-900 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
              Create and schedule content <i className="text-purple-500 font-bold">quicker.</i>
            </h2>
            <img src={img4} alt="create post" className="w-32 md:w-40 mt-4 lg:w-60" />
          </div>

          {/* AI Content */}
          <div className="bg-orange-300 p-6 rounded-2xl flex flex-col md:flex-row md:items-center md:p-12 md:justify-center gap-4 md:col-span-2 xl:col-span-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <h2 className="text-gray-900 text-2xl md:text-3xl lg:text-4xl font-semibold">
              Write your content using AI.
            </h2>
            <img src={img1} alt="ai-content" className="w-48 md:w-64 mt-4 lg:w-72"/>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
