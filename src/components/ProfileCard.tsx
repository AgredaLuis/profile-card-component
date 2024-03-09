import './ProfileCard.css';

export const ProfileCard = () => {
  return (
    <div className="w-[350px] h-[375px] bg-White rounded-2xl">
      <img
        src="./images/bg-pattern-card.svg"
        alt="bg-pattern-card"
        className="rounded-t-2xl"
      />
      <div className="flex flex-col justify-center items-center translate-y-[-52px] pb-[23px] border-b-[1px] border-Grayishblue border-opacity-[0.2]">
        <img
          src="./images/image-victor.jpg"
          alt="Victor-profile-img"
          className="rounded-full border-[5px] border-solid border-White w-[106px] h-[106px] object-center object-cover mb-4"
          width={100}
          height={100}
        />
        <div className="flex gap-[10px] mb-1">
          <h1 className="text-lg font-bold text-Desaturatedblue">
            Victor Crest
          </h1>
          <p className="text-lg text-Grayishblue font-medium">26</p>
        </div>
        <p className="text-sm text-Grayishblue">London</p>
      </div>

      {/* stats */}
      <div className="flex items-center justify-around translate-y-[-62%] px-[20px] py-[21px]">
        <section className='flex flex-col items-center'>
          <h2 className='data-stats font-semibold text-Desaturatedblue'>80K</h2>
          <p className="text-stats font-medium text-Grayishblue">Followers</p>
        </section>
        <section className='flex flex-col items-center -translate-x-[7px]'>
          <h2 className='data-stats font-semibold text-Desaturatedblue'>803K</h2>
          <p className="text-stats font-medium text-Grayishblue">Likes</p>
        </section>
        <section className='flex flex-col items-center -translate-x-[7px]'>
          <h2 className='data-stats font-semibold text-Desaturatedblue'>1.4K</h2>
          <p className="text-stats font-medium text-Grayishblue">Photos</p>
        </section>
      </div>
    </div>
  );
};
