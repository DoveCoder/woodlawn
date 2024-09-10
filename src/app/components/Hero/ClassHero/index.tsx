"use client"

const ClassHero = ({reverse}) => {
  if (reverse) {
    return (
      <div className={`flex flex-row-reverse justify-between items-center max-lg:flex-col gap-10 w-full`}>
        <div className="flex flex-1 flex-col">
          <h2 className="text-4xl capitalize font-bold lg:max-w-lg">
            Kickboxing
          </h2>
          <p className="mt-4 lg:max-w-lg">
            Kickboxing is an exhilarating and dynamic martial art that combines elements of traditional boxing with powerful kicks. It’s not just about physical strength and agility; kickboxing also enhances mental focus, discipline, and self-confidence. Whether you’re looking to improve your fitness, learn self-defense, or simply enjoy a high-energy workout, kickboxing offers a full-body exercise that challenges both your mind and body. Plus, it’s a great way to relieve stress and have fun while getting in shape! 🥊
            Have you ever tried kickboxing, or are you thinking about starting?
          </p>
          <div className="mt-11">
            <button>{'->'}</button>
          </div>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <img className="object-contain" width={570} height={522} />
        </div>
      </div>
    )
  }

  return (
    <div className={`flex justify-between items-center max-lg:flex-col gap-10 w-full`}>
      <div className="flex flex-1 flex-col">
        <h2 className="text-4xl capitalize font-bold lg:max-w-lg">
          Kickboxing
        </h2>
        <p className="mt-4 lg:max-w-lg">
          Kickboxing is an exhilarating and dynamic martial art that combines elements of traditional boxing with powerful kicks. It’s not just about physical strength and agility; kickboxing also enhances mental focus, discipline, and self-confidence. Whether you’re looking to improve your fitness, learn self-defense, or simply enjoy a high-energy workout, kickboxing offers a full-body exercise that challenges both your mind and body. Plus, it’s a great way to relieve stress and have fun while getting in shape! 🥊
          Have you ever tried kickboxing, or are you thinking about starting?
        </p>
        <div className="mt-11">
          <button>{'->'}</button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img className="object-contain" width={570} height={522} />
      </div>
    </div>
  )
}

export default ClassHero;
