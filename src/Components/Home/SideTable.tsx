export default function SideTable() {
    return (
      <div
        style={{
          height: "600px",
          backgroundColor: "#FAF4F4", // 1% darker shade of the original color
        }}
        className="w-full"
      >
        <div
          style={{
            height: "600px",
            width: "75%",
            marginLeft: "auto",
            marginRight: "auto",
            backgroundColor: "#FAF4F4", // Darker background color
          }}
          className="flex flex-wrap justify-between items-center px-4 gap-4" // Added gap to control spacing
        >
          {/* First Table Section */}
          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "450px",
              backgroundColor: "#FAF4F4",
              position: "relative",
              marginBottom: "20px",
            }}
            className="flex flex-col items-center"
          >
            <img src="/Images/Home/SquareSideTable.png" alt=""
            style={{}}
            className="w-full" />
            <p
              style={{
                fontSize: "30px",
                position: "absolute",
                left: "40px",
                bottom: "140px",
                fontFamily : "Poppins",
                fontWeight: 600,
              }}
            >
              Side table
            </p>
            <p
              style={{
                fontSize: "18px",
                position: "absolute",
                left: "40px",
                bottom: "100px",
                fontFamily : "Poppins",
                fontWeight: 600,
              }}
            >
              View More
            </p>
            <hr
              style={{
                width: "90px",
                position: "absolute",
                left: "40px",
                bottom: "90px",
                border: "1px solid black",
              }}
            />
          </div>
  
          {/* Second Table Section */}
          <div
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "450px",
              backgroundColor: "#FAF4F4",
              position: "relative",
              marginBottom: "20px",
            }}
            className="flex flex-col items-center"
          >
            <img src="/Images/Home/CloudSofa.png" alt="" className="w-full" />
            <p
              style={{
                fontSize: "30px",
                position: "absolute",
                left: "40px",
                bottom: "120px",
                fontFamily : "Poppins",
                fontWeight: 600,
              }}
            >
              Side table
            </p>
            <p
              style={{
                fontSize: "18px",
                position: "absolute",
                left: "40px",
                bottom: "90px",
                fontFamily : "Poppins",
                fontWeight: 600,
              }}
            >
              View More
            </p>
            <hr
              style={{
                width: "90px",
                position: "absolute",
                left: "40px",
                bottom: "80px",
                border: "1px solid black",
              }}
            />
          </div>
        </div>
      </div>
    );
  }
  