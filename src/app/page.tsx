export default function Home() {
  // density-0, density-1, density-2, density-3
  const d0 = Array.from({ length: 21 }, (_, i) => 0);
  const d1 = Array.from({ length: 15 }, (_, i) => 1);
  const d2 = Array.from({ length: 8 }, (_, i) => 2);
  const d3 = Array.from({ length: 6 }, (_, i) => 3);

  const grid = d0.concat(d1, d2, d3);

  const shuffle = (array: number[]) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  const shuffledGrid = shuffle(grid);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8">
      <div className="w-full max-w-[1440px] mx-auto">
        <div className="grid gap-4 grid-cols-10 grid-rows-5">
          {/* <div>Middle block</div> */}
          {shuffledGrid.map((density, index) => (
            <div key={index} className={`block density-${density}`}></div>
          ))}
        </div>
      </div>
    </main>
  );
}
