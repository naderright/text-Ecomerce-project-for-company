import { MapPin, Phone ,Clock10Icon} from "lucide-react";

export default function ContactInfo() {
  return (
    <div className="space-y-8">
      {/* Address */}
      <div className="flex items-start gap-4">
        <MapPin className=" w-6 h-6 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="text-black max-w-[12rem] font-[500]">
            236 5th SE Avenue, New York NY10000, United States
          </p>
         
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <Phone className=" w-6 h-6 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">Phone</h3>
          <p className="text-black max-w-[12rem] font-[500]">
           Mobile: +(84) 546-6789
          </p>
          <p className="text-black max-w-[12rem] font-[500] ">
            Hotline: +(84) 456-6789
          </p>
        </div>
      </div>

      {/* Working time */}
      <div className="flex items-start gap-4">
        <Clock10Icon className=" w-6 h-6 mt-1" />
        <div>
          <h3 className="text-lg font-semibold">Working Time</h3>
          <p className="text-black max-w-[12rem] font-[500]">
           Monday-Friday: 9:00 - 22:00

          </p>
          <p className="text-black max-w-[12rem] font-[500] ">
           Saturday-Sunday: 9:00 - 21:00
          </p>
        </div>
      </div>
    </div>
  );
}
