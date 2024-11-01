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
    <main>
    <div className='bg-gray-200 h-fit max-w-full mx-auto'>
      {/* <section>
      <nav>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
      </section> */}
      <section className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {/* first block */}
        <div className='bg-slate-900 mx-auto p-10 h-[300px] w-[330px] mt-4 rounded-2xl'>
          <div className='flex flex-col items-center gap-2'>
          <h1 className='text-white text-4xl text-center px-6 py-2'>
            Social Media <span className='text-yellow-500'>10x</span> <i>Faster</i> with AI
          </h1>
          <img src={img5} alt="5 stars" className='max-h-32 max-w-48 '/>
          <p className='text-gray-200 text-xl'>Over 4,000 5-star reviews</p>
          </div> 
        </div>

        {/* 2nd block */}
        <div className='bg-gray-100 mx-auto h-[170px] w-[330px] mt-4 rounded-2xl flex flex-col gap-2 p-4'>
          <img src={img7} alt="multiple platforms"/>
          <h1 className='text-gray-900 text-2xl font-semibold leading-none'>Manage multiple accounts and platforms.</h1>
          </div>
        
        {/* 3rd block */}
        <div className='bg-orange-300 mx-auto h-[230px] w-[330px] mt-4 rounded-2xl p-4 overflow-hidden'>
          <h1 className='text-gray-900 text-2xl font-semibold leading-none'>Maintain a consistent posting schedule.</h1>
          <img src={img3} alt="consistent schedule" className='max-h-40 mt-6'/>
        </div>

        {/* 4th block */}
        <div className='bg-purple-200 mx-auto h-[485px] w-[330px] mt-4 rounded-2xl p-4 flex flex-col items-center gap-6'>
          <h1 className='text-gray-900 text-2xl font-semibold leading-none text-center pt-5'>Schedule to social media.</h1>
          <img src={img8} alt="schedule-posts" />
          <p className='text-xl text-center leading-tight'>Optimize post timings to publish content at the perfect time for your audience.</p>
        </div>

        {/* 5th block */}
        <div className='bg-purple-500 mx-auto h-[400px] w-[330px] mt-4 rounded-2xl p-6 flex flex-col items-center gap-8'>
          <img src={img6} alt="grow followers" className='max-h-52'/>
          <h1 className='text-white text-3xl leading-none text-center px-8 py-4'>Grow followers with non-stop content.</h1>
        </div>

        {/* 6th block */}
        <div className='bg-white mx-auto h-[240px] w-[330px] mt-4 rounded-2xl p-6 flex flex-col gap-4'>
          <h1 className='text-gray-900 text-5xl leading-tight'>&gt;56%</h1>
          <p className='text-xl leading-tight'>faster audience growth</p>
          <img src={img2} alt="audience growth" className='w-44'/>
        </div>
 
        {/* 7th block */}
        <div className='bg-yellow-100 mx-auto h-[220px] w-[330px] mt-4 rounded-2xl p-6 flex flex-col gap-4'>
          <h1 className='text-gray-900 text-3xl font-semibold leading-0'>Create and schedule content <i className='text-purple-500 font-bold'>quicker.</i></h1>
          <img src={img4} alt="create post"className='w-40'/>
        </div>

        <div className='bg-orange-300 mx-auto h-[385px] w-[330px] mt-4 rounded-2xl p-6 mb-4 flex flex-col gap-4'>
          <h1 className='text-gray-900 text-3xl font-semibold leading-none'>Write your content using AI.</h1>
          <img src={img1} alt="ai-content" className='w-64'/>
        </div>
      </section>
    </div>
    </main>
    
    </>
  )
}

export default App
