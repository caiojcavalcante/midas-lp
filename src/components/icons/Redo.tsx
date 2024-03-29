function IconArrowCounterclockwise(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      strokeWidth={4}
      {...props}
    >
      <path
        fillRule="evenodd"
        d="M8 3a5 5 0 11-4.546 2.914.5.5 0 00-.908-.417A6 6 0 108 2v1z"
      />
      <path d="M8 4.466V.534a.25.25 0 00-.41-.192L5.23 2.308a.25.25 0 000 .384l2.36 1.966A.25.25 0 008 4.466z" />
    </svg>
  );
}

export default IconArrowCounterclockwise;
