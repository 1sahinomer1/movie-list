function Watched(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.201 21.6H21.6V24H12C5.372 24 0 18.628 0 12S5.372 0 12 0s12 5.372 12 12a11.982 11.982 0 01-4.799 9.6zM12 9.6a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm-4.8 4.8a2.4 2.4 0 100-4.8 2.4 2.4 0 000 4.8zm9.6 0a2.4 2.4 0 100-4.801 2.4 2.4 0 000 4.801zM12 19.2a2.4 2.4 0 100-4.801 2.4 2.4 0 000 4.801z"
        fill="#fff"
      />
    </svg>
  );
}

export default Watched;
