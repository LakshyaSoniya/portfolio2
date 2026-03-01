
function ProfileHandle() {

    const platforms = [
        {
            PlatformName: "LeetCode",
            link: "https://leetcode.com/u/Lakshya_Jangid_2005/",
            domain: "leetcode.com"
        },
        {
            PlatformName: "CodeForces",
            link: "https://codeforces.com/profile/thelakshya31",
            domain: "codeforces.com"
        },
        {
            PlatformName: "CodeChef",
            link: "https://codechef.com/users/yourusername",
            domain: "codechef.com"
        },
        {
            PlatformName: "GeeksforGeeks",
            link: "https://www.geeksforgeeks.org/user/thelaks9h3z/",
            domain: "geeksforgeeks.org"
        }
    ];


  return (
    <div id="ProfileHandle" className="bg-background text-foreground border-t border-border px-4 sm:px-6 md:px-10 py-8 md:py-10 flex flex-wrap justify-center sm:justify-evenly gap-6 sm:gap-8">

    {platforms.map((platform, i) => (
        <a
        key={i}
        href={platform.link}
        target="_blank"
        rel="noopener noreferrer"
        title={platform.PlatformName}
        className="
            group
            h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24
            rounded-full
            bg-card
            border border-gray-700
            flex items-center justify-center
            shadow-[0_0_15px_rgba(59,130,246,0.25)]
            hover:shadow-[0_0_40px_rgba(59,130,246,0.6)]
            hover:scale-110
            transition-all duration-500
        "
        >
        <img
            src={
            platform.PlatformName === "GeeksforGeeks"
                ? "https://images.yourstory.com/cs/images/companies/119169043101580097794440231905187057223611079n-1617083628661.png"
                : platform.PlatformName === "CodeForces"
                ? "https://jaskamalkainth.github.io/img/codeforces_logo.png"
                : `https://logos.hunter.io/${platform.domain}`
            }
            alt={platform.PlatformName}
            className="
            w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14
            object-contain
            rounded-full
            "
        />
        </a>
    ))}

    </div>
  )
}

export default ProfileHandle