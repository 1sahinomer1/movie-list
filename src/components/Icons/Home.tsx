function Home(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19 22H5a1 1 0 01-1-1v-8H2l9.292-9.293a1 1 0 011.415 0L22 13h-2v8a1 1 0 01-1 1zm-9-7h4v5h4v-8.172l-6-6-6 6V20h4v-5z"
        fill="white"
      />
    </svg>
  );
}

export default Home;
