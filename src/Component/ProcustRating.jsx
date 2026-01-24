import React from 'react'

const ProcustRating = () => {
  return (
    <div>
            <div className="p-4">
  <h2 className="text-2xl font-semibold mb-4">User Ratings</h2>
  <div className="grid grid-cols-3 gap-6">
    {/* Row 1 */}
    <div className="flex flex-col items-center">
      <span className="font-medium mb-1">Aarav</span>
      <progress className="progress progress-accent w-56" value="0" max="100"></progress>
    </div>
    <div className="flex flex-col items-center">
      <span className="font-medium mb-1">Saanvi</span>
      <progress className="progress progress-accent w-56" value="10" max="100"></progress>
    </div>
    <div className="flex flex-col items-center">
      <span className="font-medium mb-1">Vivaan</span>
      <progress className="progress progress-accent w-56" value="40" max="100"></progress>
    </div>

    {/* Row 2 */}
    <div className="flex flex-col items-center">
      <span className="font-medium mb-1">Diya</span>
      <progress className="progress progress-accent w-56" value="70" max="100"></progress>
    </div>
    <div className="flex flex-col items-center">
      <span className="font-medium mb-1">Aditya</span>
      <progress className="progress progress-accent w-56" value="100" max="100"></progress>
    </div>
    <div className="flex flex-col items-center">
      <span className="font-medium mb-1">Ananya</span>
      <progress className="progress progress-accent w-56" value="50" max="100"></progress>
    </div>
  </div>
</div>


    </div>
  )
}

export default ProcustRating