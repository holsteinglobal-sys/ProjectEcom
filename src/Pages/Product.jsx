import React from 'react'



const Product = () => {
  return (
    <div>
          <div
  className="hero h-[747px]"
  style={{
    backgroundImage:
      "url(https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Products</h1>
      <div className='flex gap-8 justify-center '>
        <button className="btn btn-soft btn-primary">Men</button>
        <button className="btn btn-soft btn-secondary">Women</button>
        <button className="btn btn-soft btn-accent">Kids</button>

      </div>

    </div>
  </div>
</div>
    </div>
  )
}

export default Product