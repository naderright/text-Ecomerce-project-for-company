"use client";


export default function ContactForm() {
 

  return (
    <form  className="space-y-4">
      
      <div>
        <label htmlFor="name" className="block mb-1 text-[1rem] text-black py-3   font-medium">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="ABC"
          className="w-full border border-gray-300 p-3 rounded-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb- text-[1rem] text-black py-3  font-medium">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your email "
          className="w-full border border-gray-300 p-3 rounded-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="subject" className="block m text-[1rem] text-black py-3   font-medium">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="Your Subject"
          className="w-full border border-gray-300 p-3 rounded-sm"
          required
        />
      </div>

      <div>
        <label htmlFor="message" className="block m text-[1rem] text-black py-3   font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="your Massage"
          rows={3} // أقصر من قبل
          className="w-full border border-gray-300 p-3 rounded-sm"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white w-[15rem] h-[3rem] rounded hover:bg-primary/80 transition"
      >
        Submit
      </button>
    </form>
  );
}
