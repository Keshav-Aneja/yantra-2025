export default function Timeline() {
    const events = [
      { id: 1, highlighted: true },
      { id: 2, highlighted: false },
      { id: 3, highlighted: false },
      { id: 4, highlighted: false },
      { id: 5, highlighted: false },
    ]
  
    return (
      <div className="bg-background p-8">
        <h1 className="text-white text-4xl font-roboto text-center mb-12">TIMELINE</h1>
        
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-white" />
          <div className="space-y-12">
            {events.map((event, index) => (
              <div key={event.id} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl">✽</span>
                  </div>
                </div>

                <div className={`w-[65%] ${index % 2 === 0 ? 'ml-[-30%]' : 'ml-[65%]'}`}>
                  <div 
                    className={`p-4 rounded ${
                      event.highlighted 
                        ? 'gradient-bg' 
                        : 'bg-[#5F5F5F]'
                    }`}
                  >
                    <div className="font-roboto font-bold text-2xl">
                      <div className="text-black">Week Inauguration</div>
                    </div>
                    <div className="text-black font-roboto font-bold mt-2 text-2xl">06 JUN</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  
  