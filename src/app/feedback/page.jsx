import { auth, currentUser } from "@clerk/nextjs";
import SideNavbar from "./../../components/SideNavbar";
export default async function Feedback() {
    const Feedback = () => {
        const handleSubmit = (e) => {  
            e.preventDefault();
            console.log("Feedback submitted");
        }
    }

    
    return (
        
        <div className="flex">
            <SideNavbar/>
            <div className="flex-col ml-[400px]">
                <h1 className="flex items-center justify-center mb[10] text-2xl">Feedback</h1>
                <div className=" mt-36 w-[400px]">
            
                    <div className="mb-4 ">
                    <label htmlFor="name" className="block text-black">Name:</label>
                    <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-700 rounded-md"></input>
                </div>

                <div className="mb-4">
                    <label htmlFor="email" className="block text-black">Email:</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-700 rounded-md"></input>
                </div>

                <div className="mb-4">
                    <label htmlFor="message" className="block text-black">Message:</label>
                    <textarea id="message" name="message" required className="w-full px-3 py-2 border border-gray-700 rounded-md"></textarea>
                </div>

                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Submit</button>
                </div>
            </div>
        </div>
       
    );
};

