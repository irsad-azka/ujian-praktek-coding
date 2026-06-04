import React from 'react'
import {useState, useEffect} from 'react'
import userProfile from '../assets/user (1).svg'
import galeryicon from '../assets/userPost/gallery (1).svg'
import gificon from '../assets/userPost/gif.svg'
import emojiicon from '../assets/userPost/happy-face.svg'
import scheduleicon from '../assets/userPost/schedule.svg'
import locationicon from '../assets/userPost/location.svg'
import checkicon from '../assets/userPost/checklist.svg'
import flagicon from '../assets/userPost/flag.svg'
import chaticon from '../assets/posticon/bar-graph.svg'
import likeicon from '../assets/posticon/heart.svg'
import commenticon from '../assets/posticon/speech-bubble (2).svg'
import repost from '../assets/posticon/repost.svg'

const Halamanutama = () => {
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true);
    const [postContent, setPostContent] = useState([]);
    
    

    const handlePost = () => {
      if (!text.trim()) return;
    
      setPostContent([text, ...postContent]);
      setText('');
    }

    
    const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(res => res.json())
      .then(data => setComments(data));
  }, []);
    
  return (
        <div className="flex z-9 relative flex-col items-center h-screen grid-cols-1">
          <div className=" border-l border-r border-gray-600">
            <div className="text-2xl font-bold bg-black pt-30 pl-10 pr-10 pb-5 border-b border-gray-600">
              <div className="flex items-start gap-4">
                <img src={userProfile} alt="User Profile" className="w-10 h-10 rounded-full"/>   
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="what's happening?" className='text-xl bg-transparent font-semibold border-none outline-none'>
                </input>
                
              </div>
              <div className="flex gap-1 ml-13 mt-4 items-center">
                <div className="p-1 hover:scale-120 rounded-2xl hover:bg-gray-900 hover:rounded-2xl transition duration-300 cursor-pointer">
                  <img src={galeryicon} alt="Gallery Icon" className="w-5 h-5 object-cover hover:scale-115 hover:rounded-2xl transition duration-300 cursor-pointer"/>
                </div>
                <div className="p-1 hover:scale-120 rounded-2xl hover:bg-gray-900 hover:rounded-2xl transition duration-300 cursor-pointer">
                  <img src={gificon} alt="Gif Icon" className="w-5 h-5 object-cover hover:scale-115 hover:rounded-2xl transition duration-300 cursor-pointer"/>
                </div>
                <div className="p-1 hover:scale-120 rounded-2xl hover:bg-gray-900 hover:rounded-2xl transition duration-300 cursor-pointer">
                  <img src={checkicon} alt="Check Icon" className="w-5 h-5 object-cover hover:scale-115 hover:rounded-2xl transition duration-300 cursor-pointer"/>
                </div>
                <div className="p-1 hover:scale-120 rounded-2xl hover:bg-gray-900 hover:rounded-2xl transition duration-300 cursor-pointer">
                  <img src={emojiicon} alt="Emoji Icon" className="w-5 h-5 object-cover hover:scale-115  hover:rounded-2xl transition duration-300 cursor-pointer"/>
                </div>
                <div className="p-1 hover:scale-120 rounded-2xl hover:bg-gray-900 hover:rounded-2xl transition duration-300 cursor-pointer">
                  <img src={scheduleicon} alt="Schedule Icon" className="w-5 h-5 object-cover hover:scale-115 hover:rounded-2xl transition duration-300 cursor-pointer"/>
                </div>
                <div className="p-1 hover:scale-120 rounded-2xl hover:bg-gray-900 hover:rounded-2xl transition duration-300 cursor-pointer">
                  <img src={locationicon} alt="Location Icon" className="w-5 h-5 object-cover hover:scale-115 hover:rounded-2xl transition duration-300 cursor-pointer"/>
                </div>
                <div className="p-1 hover:scale-120 rounded-2xl hover:bg-gray-900 hover:rounded-2xl transition duration-300 cursor-pointer">
                  <img src={flagicon} alt="Flag Icon" className="w-5 h-5 object-cover hover:scale-115 hover:rounded-2xl transition duration-300 cursor-pointer"/>
                </div>
                <div>
                  <button onClick={handlePost} className="bg-gray-800 text-black px-4 py-2 rounded-full text-sm ml-20">
                    Post
                  </button>
                </div>
              </div>
            </div>
          <div className="bg-black">
              {postContent.map((content, index) => (
                <div
                  key={index}
                  className="flex gap-3 border-b border-gray-600 p-4"
                >
                  <img
                    src={userProfile}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full"
                  />
    
                  <div>
                    <div className="flex items-center gap-1">
                      <span className="text-[13px] font-semibold text-white">
                        ARAP
                      </span>
    
                      <span className="text-[11px] text-gray-500">
                        @ARAP
                      </span>
                    </div>
    
                    <p className="text-[17px] max-w-[300px] break-all font-semibold text-white ">
                      {content}
                    </p>
                  <div className="flex gap-25 ml-auto mt-4 items-center">
                    <div className="flex items-center gap-1 p-1 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
                      <img src={commenticon} alt="Comment Icon" className="w-4 h-4 transition duration-300 cursor-pointer"/>
                    </div >
                    <div className="flex items-center gap-1 p-1 rounded-full hover:bg-green-900 transition duration-300 cursor-pointer">
                      <img src={repost} alt="Repost Icon" className="w-5 h-5 transition duration-300 cursor-pointer"/>
                    </div>
                    <div onClick={() => handleLike(item.id)} className="flex items-center gap-1 p-1 rounded-full hover:bg-red-900 transition duration-300 cursor-pointer">
                      <img src={likeicon} alt="Like Icon" className="w-4 h-4 transition duration-300 cursor-pointer"/>
                    </div>
                    <div className="flex items-center gap-1 p-1 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
                      <img src={chaticon} alt="Chat Icon" className="w-4 h-4 transition duration-300 cursor-pointer"/>
                    </div>
                  </div>
                  </div>
                  
                </div>
              ))}
            </div>
            <div className=" text-white">
            {comments.slice(0, 20).map((item) => (
                <div key={item.id} className="border-b border-gray-600 p-2">
                    <div className="flex items-center gap-2">
                        <img src={userProfile} alt="User Profile" className="w-10 h-10 ml-2 rounded-full"/>
                        <p className="font-bold">{item.name}</p>
                    </div>
                    <div className="ml-14 mt-1">
                        <p className="text-sm max-w-[300px] break-all text-gray-600">{item.email}</p>
                        <p className="max-w-[450px] break-all">{item.body}</p>
                    </div>
                    <div className="flex gap-25 ml-14  mt-4 items-center">
                        <div className="flex items-center gap-1 p-1 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
                        <img src={commenticon} alt="Comment Icon" className="w-4 h-4 transition duration-300 cursor-pointer"/>
                        </div >
                        <div className="flex items-center gap-1 p-1 rounded-full hover:bg-green-900 transition duration-300 cursor-pointer">
                        <img src={repost} alt="Repost Icon" className="w-5 h-5 transition duration-300 cursor-pointer"/>
                        </div>
                        <div className="flex items-center gap-1 p-1 rounded-full hover:bg-red-900 transition duration-300 cursor-pointer">
                        <img src={likeicon} alt="Like Icon" className="w-4 h-4 transition duration-300 cursor-pointer"/>
                        </div>
                        <div className="flex items-center gap-1 p-1 rounded-full hover:bg-blue-700 transition duration-300 cursor-pointer">
                        <img src={chaticon} alt="Chat Icon" className="w-4 h-4 transition duration-300 cursor-pointer"/>
                        </div>
                    </div>
                </div>
            ))}
            
            </div>

            {/* <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div>
            <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div>
            <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div>
            <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div>
            <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div>
            <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div>
            <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div>
            <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div>
            <div className="text-2xl font-bold bg-amber-600 p-7">Main Page</div> */}
          </div>
        </div>
  )
}

export default Halamanutama