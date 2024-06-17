export const TextInput = () => {
  // const { placeholderText, register, name, type, value, errorsLabel, ...rest } =
  //   props;

  return (
    <div className="w-full">
      <div
        className={`w-full h-auto rounded-lg bg-white focus:accent-transparent relative`}
      >
        <input
          // type={visiblePassword ? "text" : type}
          placeholder=""
          // {...register(name)}
          className={`rounded-lg py-3 px-6 focus:accent-transparent w-full h-auto placeholder-shown:capitalize placeholder-shown:text-gray-regular placeholder:text-14`}
          value=""
          defaultValue=""
        />
      </div>
    </div>
  );
};
