

export const HorizontalCard = () => {
  return (
    <div className="max-w-sm w-full lg:max-w-full lg:flex">
      <div
        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        // style="background-image: url('/assets/IMG_9133.JPG')"
        style={{ backgroundColor: "blue" }}
        title="SteamDB screenshot"
      ></div>
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          {/* <p className="text-sm text-gray-600 flex items-center">
            <svg
              className="fill-current text-gray-500 w-3 h-3 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p> */}
          <div className="text-gray-900 font-bold text-xl mb-2">
            SteamDB
          </div>
          <h3 className="text-gray-700 text-lg">
          IT2810 - Webutvikling - Project 3
          </h3>
          <p className="text-gray-700 text-base pb-4">
            The porpuse was to learn how to creat your own backend. We choose MongoDB as a database. And we had to use graphql to connect the front end and backedn together
          </p>
          <p className="text-gray-700 text-base">Development period: 3.5 weeks</p>
          <p className="text-gray-700 text-base">Webstack: React Express MongoDB ApolloClinet Node Typescript GraphQL</p>
          <p className="text-gray-700 text-base">technologies: Webstorage Recoil</p>
        </div>
        {/* <div className="flex items-center">
      <img
        className="w-10 h-10 rounded-full mr-4"
        src="/img/jonathan.jpg"
        alt="Avatar of Jonathan Reinink"
      />
      <div className="text-sm">
        <p className="text-gray-900 leading-none">
          Jonathan Reinink
        </p>
        <p className="text-gray-600">Aug 18</p>
      </div>
    </div> */}
      </div>
    </div>
  );
};
