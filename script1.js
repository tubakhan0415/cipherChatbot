document.addEventListener("DOMContentLoaded", () => {
  const chatboxSupport = document.getElementById("chatboxSupport");
  const contactButton = document.getElementById("contactButton");
  const contactOptions = document.getElementById("contactOptions");
  const backToOptionsButton = document.getElementById("backToOptionsButton");
  const selectedProductName = document.getElementById("selectedProductName");

  const chatboxIcon = document.getElementById("chatboxIcon");
  const productButton = document.getElementById("productButton");
  const serviceButton = document.getElementById("serviceButton");
  const backToRegistrationFromProduct = document.getElementById(
    "backToRegistrationFromProduct"
  );
  const productOptions = document.getElementById("productOptions");
  const serviceOptions = document.getElementById("serviceOptions");
  const productServiceInfo = document.getElementById("productServiceInfo");
  const productServiceTitle = document.getElementById("productServiceTitle");
  const productServiceDescription = document.getElementById(
    "productServiceDescription"
  );
  const tallyButton = document.getElementById("tallyButton");
  const ezyBillButton = document.getElementById("ezyBillButton");
  const busyDataButton = document.getElementById("busyDataButton");
  const tallyCloudButton = document.getElementById("tallyCloudButton");
  const tallyMobileButton = document.getElementById("tallyMobileButton");

  // Ensure that the elements are available before attaching event listeners
  if (contactButton) {
    contactButton.addEventListener("click", () => {
      contactOptions.style.display = "block";
    });
  }

  if (backToOptionsButton) {
    backToOptionsButton.addEventListener("click", () => {
      contactOptions.style.display = "none";
    });
  }

  // Attach Event Listeners to Redirect Buttons
  const buttons = [
    tallyButton,
    ezyBillButton,
    busyDataButton,
    tallyCloudButton,
    tallyMobileButton,
  ];
  buttons.forEach((button) => {
    if (button) {
      button.addEventListener("click", redirectToContactModal);
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const serviceButtons = [
      { id: "webDesigningButton", serviceName: "Web Designing" },
      { id: "softwareDevButton", serviceName: "Software Development" },
      { id: "androidDevButton", serviceName: "Android App Development" },
      { id: "digitalMarketingButton", serviceName: "Digital Marketing" },
      { id: "seoButton", serviceName: "SEO" },
      { id: "ePublishingButton", serviceName: "E-Publishing" },
      { id: "digitizationButton", serviceName: "Digitization" },
      { id: "dataConversionButton", serviceName: "Data Conversion" },
    ];

    // Loop through each service button to set the display behavior
    serviceButtons.forEach(({ id, serviceName }) => {
      const button = document.getElementById(id);
      if (button) {
        button.addEventListener("click", () => {
          console.log(`${serviceName} Button Clicked`);
        });
      } else {
        console.error(`Button with id ${id} not found in DOM`);
      }
    });

    // Display Service Details along with Contact and More Details buttons
    function displayServiceDetails(serviceName) {
      const serviceInfo = document.getElementById("productServiceInfo");
      const contactMoreDetails = document.getElementById("contactMoreDetails");
      const productServiceInfo = document.getElementById("productServiceInfo");
      const serviceTitle = document.getElementById("productServiceTitle");
      const serviceDescription = document.getElementById(
        "productServiceDescription"
      );

      // Show the service info along with buttons for Contact and More Details
      if (serviceInfo) {
        serviceInfo.style.display = "block";
        serviceTitle.textContent = serviceName;
        serviceDescription.textContent = `Learn more about ${serviceName}. Connect with us for detailed information.`;

        // Function to handle displaying service details
        function handleServiceClick(serviceName) {
          document.getElementById("serviceOptions").style.display = "none";
          const serviceContactDetails = document.getElementById(
            "serviceContactMoreDetails"
          );
          const serviceTitle = document.getElementById("productServiceTitle");
          const serviceDescription = document.getElementById(
            "productServiceDescription"
          );

          // Show the service details
          if (serviceContactDetails) {
            serviceContactDetails.style.display = "block";
          }
          if (serviceTitle) {
            serviceTitle.textContent = serviceName;
          }
          if (serviceDescription) {
            serviceDescription.textContent = `Learn more about ${serviceName}. Connect with us for detailed information.`;
          }
        }

        // Add click event listeners to all service buttons
        serviceButtons.forEach((button) => {
          const serviceButton = document.getElementById(button.id);
          if (serviceButton) {
            serviceButton.addEventListener("click", () => {
              handleServiceClick(button.serviceName);
            });
          }
        });

        // Handle back button for returning to service options
        const backToServiceOptionsButton = document.getElementById(
          "backToServiceOptionsButton"
        );
        if (backToServiceOptionsButton) {
          backToServiceOptionsButton.addEventListener("click", () => {
            document.getElementById("serviceContactMoreDetails").style.display =
              "none";
            document.getElementById("serviceOptions").style.display = "block";
          });
        }
        // Hide other options and show service-specific details
        if (serviceOptions) serviceOptions.style.display = "none";
        if (productServiceInfo) {
          productServiceInfo.style.display = "block";
          if (serviceTitle) serviceTitle.textContent = serviceName;
          if (serviceDescription) {
            serviceDescription.textContent = `Learn more about ${serviceName}. Connect with us for detailed information.`;
          }
        }

        if (serviceTitle && serviceDescription) {
          serviceTitle.textContent = serviceName;
          serviceDescription.textContent = `Learn more about ${serviceName}.`;
        }
      }

      if (contactMoreDetails) {
        contactMoreDetails.style.display = "block";
      }
    }

    function redirectToContactModal() {
      const contactMoreDetails = document.getElementById("contactMoreDetails");
      if (productOptions) {
        productOptions.style.display = "none";
      }
      if (contactMoreDetails) {
        contactMoreDetails.style.display = "block";
      }
    }

    // Existing code for handling "Contact" and "More Details" buttons
    // document
    //   .getElementById("contactButton")
    //   .addEventListener("click", function () {
    //     window.location.href =
    //       "https://api.whatsapp.com/send?phone=919997544981&text=Hi+from+web";
    //   });

    document
      .getElementById("moreDetailsButton")
      .addEventListener("click", function () {
        document.getElementById("contactMoreDetails").style.display = "none";
        document.getElementById("moreDetailsLinks").style.display = "block";
      });
  });

  // Display Contact and More Details Modal
  function redirectToContactModal() {
    const contactMoreDetails = document.getElementById("contactMoreDetails");
    if (productOptions) {
      productOptions.style.display = "none";
    }
    if (contactMoreDetails) {
      contactMoreDetails.style.display = "block";
    }
  }

  // Toggle Chatbox Visibility
  if (chatboxIcon) {
    chatboxIcon.addEventListener("click", () => {
      const isHidden =
        chatboxSupport.style.display === "none" ||
        chatboxSupport.style.display === "";
      chatboxSupport.style.display = isHidden ? "block" : "none";
    });
  }

  // When the Contact button is clicked, redirect to WhatsApp
  // document
  //   .getElementById("contactButton")
  //   .addEventListener("click", function () {
  //     window.location.href =
  //       "https://api.whatsapp.com/send?phone=919997544981&text=Hi+from+web";
  //   });

  // When the More Details button is clicked, show the more details links
  // document
  //   .getElementById("moreDetailsButton")
  //   .addEventListener("click", function () {
  //     document.getElementById("contactMoreDetails").style.display = "none";
  //     document.getElementById("moreDetailsLinks").style.display = "block";
  //   });

  // Handle Form Submission
  if (document.getElementById("registerForm")) {
    document.getElementById("registerForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name")?.value;
      document.getElementById("registrationForm").style.display = "none";
      document.getElementById("productServiceOptions").style.display = "block";
    });
  }

  // Event listener for product buttons
  document.querySelectorAll(".product-button").forEach((button) => {
    button.addEventListener("click", () => {
      const productName = button.getAttribute("data-product");
      selectedProductName.textContent = productName;

      // Show the contact and more details section
      productOptions.style.display = "none";
      contactMoreDetails.style.display = "block";
    });
  });

  // Event listener for the "More Details" button
  document.getElementById("moreDetailsButton").addEventListener("click", () => {
    const productName = selectedProductName.textContent;
    let redirectUrl;

    // Define URLs for each product
    switch (productName) {
      case "Tally":
        redirectUrl = "https://andwebtech.com/content.php#";
        break;
      case "EzyBill":
        redirectUrl = "https://andwebtech.com/content2.php";
        break;
      case "Import BusyData":
        redirectUrl = "https://andwebtech.com/content2.php#";
        break;
      case "Tally on Cloud":
        redirectUrl = "https://andwebtech.com/tally_on_cloud.php";
        break;
      case "Tally on Mobile":
        redirectUrl = "https://andwebtech.com/tally_on_mobile.php";
        break;
      default:
        redirectUrl = "#";
        break;
    }

    // Redirect to the product-specific URL
    window.open(redirectUrl, "_blank");
  });

  // Back button logic
  document.getElementById("backoButton").addEventListener("click", () => {
    contactMoreDetails.style.display = "none";
    productOptions.style.display = "block";
  });

  // document
  //   .getElementById("backToProductServiceOptionsFromProduct")
  //   .addEventListener("click", () => {
  //     productOptions.style.display = "none";
  //     // Add logic to go back to the service options
  //     alert("Navigate back to the service options");
  //   });

  // Handle Product Button Click
  productButton?.addEventListener("click", () => {
    document.getElementById("productServiceOptions").style.display = "none";
    productOptions.style.display = "block";
  });

  // Handle Service Button Click
  serviceButton?.addEventListener("click", () => {
    document.getElementById("productServiceOptions").style.display = "none";
    serviceOptions.style.display = "block";
  });

  // Back Button Click for Product Options
  backToRegistrationFromProduct?.addEventListener("click", () => {
    if (productOptions) productOptions.style.display = "none";
    if (serviceOptions) serviceOptions.style.display = "none";
    if (productServiceInfo) productServiceInfo.style.display = "none";
    const productServiceOptions = document.getElementById(
      "productServiceOptions"
    );
    if (productServiceOptions) productServiceOptions.style.display = "block";
  });

  // Display Info when Product/Service Button is Clicked
  function displayProductServiceInfo(title, description) {
    if (
      productServiceTitle &&
      productServiceDescription &&
      productServiceInfo
    ) {
      productServiceTitle.textContent = title;
      productServiceDescription.textContent = description;
      productServiceInfo.style.display = "block";
    }
  }

  document.getElementById("tallyButton")?.addEventListener("click", () => {
    displayProductServiceInfo(
      "Tally",
      "Tally is a popular accounting software for businesses."
    );
  });

  document.getElementById("ezyBillButton")?.addEventListener("click", () => {
    displayProductServiceInfo(
      "EzyBill",
      "EzyBill is a cloud-based invoicing solution."
    );
  });

  document.getElementById("busyDataButton")?.addEventListener("click", () => {
    displayProductServiceInfo(
      "Import BusyData",
      "Import your Busy accounting data into new software."
    );
  });

  document.getElementById("tallyCloudButton")?.addEventListener("click", () => {
    displayProductServiceInfo(
      "Tally on Cloud",
      "Tally available on cloud for easy access."
    );
  });

  document
    .getElementById("tallyMobileButton")
    ?.addEventListener("click", () => {
      displayProductServiceInfo(
        "Tally on Mobile",
        "Access Tally on mobile devices for greater flexibility."
      );
    });

  // Handle Service Options (show Contact and More Details)
  const webDesigningButton = document.getElementById("webDesigningButton");
  if (webDesigningButton) {
    webDesigningButton.addEventListener("click", function () {
      const serviceContactMoreDetails = document.getElementById(
        "serviceContactMoreDetails"
      );
      const serviceOptions = document.getElementById("serviceOptions");
      if (serviceContactMoreDetails && serviceOptions) {
        serviceContactMoreDetails.style.display = "block";
        serviceOptions.style.display = "none";
      } else {
        console.error("Required elements for webDesigningButton not found.");
      }
    });
  }

  document
    .getElementById("softwareDevButton")
    .addEventListener("click", function () {
      document.getElementById("serviceContactMoreDetails").style.display =
        "block";
      document.getElementById("serviceOptions").style.display = "none";
    });

  document.getElementById("androidDevButton")?.addEventListener("click", () => {
    displayProductServiceInfo(
      "Android App Development",
      "Develop your custom Android apps."
    );
  });

  // Back to Service Options from Contact/More Details
  document
    .getElementById("backToServiceOptionsButton")
    ?.addEventListener("click", function () {
      const serviceContactMoreDetails = document.getElementById(
        "serviceContactMoreDetails"
      );
      const serviceOptions = document.getElementById("serviceOptions");
      if (serviceContactMoreDetails)
        serviceContactMoreDetails.style.display = "none";
      if (serviceOptions) serviceOptions.style.display = "block";
    });

  // Back to Product/Service Options
  document
    .getElementById("backToProductServiceOptionsFromService")
    .addEventListener("click", function () {
      document.getElementById("serviceOptions").style.display = "none";
      document.getElementById("productServiceOptions").style.display = "block";
    });

  // Show Contact Information (WhatsApp and Call)
  document
    .getElementById("contactButton")
    .addEventListener("click", function () {
      document.getElementById("serviceContactInfo").style.display = "block";
      document.getElementById("serviceMoreDetailsLinks").style.display = "none";
    });

  // Add event listener to the "More Details" button
  const moreDetailsButton = document.getElementById("moreDetailsButton");
  if (moreDetailsButton) {
    moreDetailsButton.addEventListener("click", function () {
      const serviceMoreDetailsLinks = document.getElementById(
        "serviceMoreDetailsLinks"
      );
      const serviceContactInfo = document.getElementById("serviceContactInfo");

      // Check if the elements exist before attempting to modify their style
      if (serviceMoreDetailsLinks) {
        serviceMoreDetailsLinks.style.display = "block";
      }
      if (serviceContactInfo) {
        serviceContactInfo.style.display = "none";
      }
    });
  }

  document
    .getElementById("digitalMarketingButton")
    ?.addEventListener("click", () => {
      displayProductServiceInfo(
        "Digital Marketing",
        "Promote your business through digital channels."
      );
    });

  document.getElementById("seoButton")?.addEventListener("click", () => {
    displayProductServiceInfo(
      "SEO",
      "Improve your website's search engine ranking."
    );
  });

  document
    .getElementById("ePublishingButton")
    ?.addEventListener("click", () => {
      displayProductServiceInfo(
        "E-Publishing",
        "Transform your content for digital publishing."
      );
    });

  document
    .getElementById("digitizationButton")
    ?.addEventListener("click", () => {
      displayProductServiceInfo(
        "Digitization",
        "Convert your physical data into digital format."
      );
    });

  document
    .getElementById("dataConversionButton")
    ?.addEventListener("click", () => {
      displayProductServiceInfo(
        "Data Conversion",
        "Convert your data into various formats."
      );
    });
});

// Directly attach the click event handler to the "Go Back" link
const goBackLink = document.getElementById("goBackLink");

// Check if the element exists before adding an event listener
if (goBackLink) {
  goBackLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Logic to toggle visibility or navigate back
    const currentSection = document.getElementById("moreDetailsLinks");
    const previousSection = document.getElementById("productServiceOptions");

    if (currentSection && previousSection) {
      currentSection.style.display = "none"; // Hide current section
      previousSection.style.display = "block"; // Show the previous section
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");
  const productOptions = document.getElementById("productOptions");
  const serviceOptions = document.getElementById("serviceOptions");

  // JavaScript to handle button click
  document.getElementById("backButton").addEventListener("click", function () {
    // Show the registration form
    document.getElementById("registrationForm").style.display = "block";

    // Hide other sections if necessary
    // Example: document.getElementById('otherSection').style.display = 'none';
  });

  // Back button from Product Options
  document
    .getElementById("backToProductServiceOptionsFromProduct")
    .addEventListener("click", function () {
      document.getElementById("productOptions").style.display = "none";
      document.getElementById("productServiceOptions").style.display = "block";
    });
});
