function Back(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={25}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.6 13.207a1 1 0 010-1.414l4.585-4.586a1 1 0 00-1.414-1.414l-4.582 4.586a3 3 0 000 4.242l4.586 4.586a1 1 0 001.414-1.414L10.6 13.207z"
        fill="white"
      />
    </svg>
  );
}

export default Back;
