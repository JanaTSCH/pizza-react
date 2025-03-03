import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="my-10 px-4 sm:my-16 text-center">
      <h1 className="mb-8 text-xl font-semibold md:text-3xl uppercase">
        The best pizza
        <br />
        <span className="text-amber-500 text-xl lowercase">
        Straight out of the oven, straight to you
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default Home;
