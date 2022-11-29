export default function FloorGenerator({
  floors,
  height,
  width,
}: {
  floors: number;
  height: number;
  width: number;
}) {
  const sqrt = (value: number) => {
    return Math.sqrt(value);
  };

  const generateRotationMatrix = (width: number, height: number) => {
    const xG = width / 2;
    const yG = height / 2;
    const fullRotationVector = [
      sqrt(2) / 2,
      -sqrt(2) / 2,
      xG - (sqrt(2) / 2) * (xG - yG),
      sqrt(6) / 6,
      sqrt(6) / 6,
      yG - (sqrt(6) / 6) * (xG + yG - 2),
      sqrt(3) / 3,
      sqrt(3) / 3,
      1 - (sqrt(3) / 3) * (xG + yG + 1),
    ];
    const SVGRrotationVector = `(${fullRotationVector[0]}, ${fullRotationVector[3]}, ${fullRotationVector[1]}, ${fullRotationVector[4]}, ${fullRotationVector[2]}, ${fullRotationVector[5]} )`;
    return SVGRrotationVector;
  };

  const rotationMatrix = generateRotationMatrix(width, height);
  console.log(rotationMatrix);
  const generateFloorsArray = (floors: number) => {
    const vectors = [];
    for (let index = 0; index < floors; index++) {
      vectors.push(index);
    }
    return vectors;
  };

  const floorsArray = generateFloorsArray(floors);

  return (
    <div className='w-[450px] h-[400px]'>
      {floorsArray.map((floor: number) => {
        return (
          <div
            className={`flexitems-center bg-slate-900  btn-secondary justify-center absolute top-[48%] left-[40%]  z-[${
              (floors - floor) * 10
            }] bg-cadetblue-300/[1%]`}
            style={{
              height: `${height}px`,
              width: `${width}px`,
              border: '5px solid #ffffff',

              transform: `matrix${rotationMatrix} translateX(${
                (-Math.max(width, height) / 7) * floor
              }px) translateY(${(-Math.max(width, height) / 7) * floor}px)`,
            }}
          ></div>
        );
      })}
      {floorsArray.map((floor: number) => {
        return (
          <p
            className={`flexitems-center btn-secondary justify-center absolute top-[60%] left-[40%]  align-bottom z-[${
              floor * 10
            }] bg-cadetblue-300/[1%]`}
            style={{
              transform: `translateY(${
                (-Math.max(width, height) / 8) * floor
              }px)`,
            }}
          >
            Floor {floor + 1}
          </p>
        );
      })}
    </div>
  );
}
