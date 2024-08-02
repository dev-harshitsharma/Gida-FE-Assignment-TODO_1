const SignUpBanner = () => {
  return (
    <div className="md:flex flex-col w-full max-w-[19rem] bg-white rounded-md p-5 space-y-3 min-h-[11rem] max-h-[13rem]">
      <div>
        <p className="text-gray-500 text-center">
          Sign up to unlock recurring tasks, publishing, collaborating, and more.
        </p>
      </div>
      <div>
        <button className="bg-custom-sighnup-button-color rounded-md w-full py-2 text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default SignUpBanner;

