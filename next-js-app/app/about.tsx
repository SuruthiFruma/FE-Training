"use client";
const AboutHeader = () => (
  <div className="w-3/4">
    <div className="h-1/4 flex flex-col">
      <div className="flex justify-between">
        <div className="flex">
          <span className="w-6 h-6 rounded-full bg-zinc-500">A</span>
          <div className="flex flex-col">
            <h2>Adam Carter</h2>
            <span>Portland US</span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex flex-wrap">
        <nav>
          <a>About</a>
          <a>Notes</a>
          <a>Appointments</a>
          <a>Updates</a>
        </nav>
      </div>
    </div>

    <div className="h-3/4"></div>
  </div>
);
export default AboutHeader;
