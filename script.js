document.addEventListener("DOMContentLoaded", () => {
  const chatboxSupport = document.getElementById("chatboxSupport");
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

  // Display Contact and More Details Modal
  function redirectToContactModal() {
    const contactMoreDetails = document.getElementById("contactMoreDetails"); // Ensure it's defined
    if (productOptions) {
      productOptions.style.display = "none";
    }
    if (contactMoreDetails) {
      contactMoreDetails.style.display = "block";
    }
  }

  // Toggle Chatbox Visibility
  chatboxIcon?.addEventListener("click", () => {
    const isHidden =
      chatboxSupport.style.display === "none" ||
      chatboxSupport.style.display === "";
    chatboxSupport.style.display = isHidden ? "block" : "none";
  });

  // When the Contact button is clicked, redirect to WhatsApp
  document
    .getElementById("contactButton")
    .addEventListener("click", function () {
      window.location.href =
        "https://api.whatsapp.com/send?phone=919997544981&text=Hi+from+web";
    });

  // When the More Details button is clicked, show the more details links
  document
    .getElementById("moreDetailsButton")
    .addEventListener("click", function () {
      document.getElementById("contactMoreDetails").style.display = "none";
      document.getElementById("moreDetailsLinks").style.display = "block";
    });

  // Handle Form Submission
  document.getElementById("registerForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name")?.value;
    document.getElementById("registrationForm").style.display = "none";
    document.getElementById("productServiceOptions").style.display = "block";
  });

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

  // Product Button Clicks
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

  // Service Button Clicks
  document
    .getElementById("webDesigningButton")
    ?.addEventListener("click", () => {
      displayProductServiceInfo(
        "Web Designing",
        "Professional web design services."
      );
    });

  document
    .getElementById("softwareDevButton")
    ?.addEventListener("click", () => {
      displayProductServiceInfo(
        "Software Development",
        "Custom software development for businesses."
      );
    });

  document.getElementById("androidDevButton")?.addEventListener("click", () => {
    displayProductServiceInfo(
      "Android App Development",
      "Develop your custom Android apps."
    );
  });

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

document.addEventListener("DOMContentLoaded", () => {
  const registrationForm = document.getElementById("registrationForm");
  const productOptions = document.getElementById("productOptions");
  const serviceOptions = document.getElementById("serviceOptions");

  // Back button from Product Options
  document
    .getElementById("backToRegistrationFromProduct")
    ?.addEventListener("click", () => {
      productOptions.style.display = "none";
      registrationForm.style.display = "block";
    });

  // Back button from Service Options
  document
    .getElementById("backToFormFromService")
    ?.addEventListener("click", () => {
      serviceOptions.style.display = "none";
      registrationForm.style.display = "block";
    });

  // Back Button Click for Product Options from Service Section
  document
    .getElementById("backToRegistrationFromService")
    ?.addEventListener("click", () => {
      registrationForm.style.display = "block";
      serviceOptions.style.display = "none";
    });
});
