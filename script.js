document.addEventListener("DOMContentLoaded", () => {
  const chatboxSupport = document.getElementById("chatboxSupport");
  const chatboxIcon = document.getElementById("chatboxIcon");
  const productButton = document.getElementById("productButton");
  const serviceButton = document.getElementById("serviceButton");
  const productOptions = document.getElementById("productOptions");
  const serviceOptions = document.getElementById("serviceOptions");
  const productServiceInfo = document.getElementById("productServiceInfo");
  const productServiceTitle = document.getElementById("productServiceTitle");
  const productServiceDescription = document.getElementById(
    "productServiceDescription"
  );
  const contactMoreDetails = document.getElementById("contactMoreDetails");
  const contactButton = document.getElementById("contactButton");
  const moreDetailsButton = document.getElementById("moreDetailsButton");

  // Toggle Chatbox Visibility
  chatboxIcon?.addEventListener("click", () => {
    const isHidden =
      chatboxSupport.style.display === "none" ||
      chatboxSupport.style.display === "";
    chatboxSupport.style.display = isHidden ? "block" : "none";
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

  // Display Info when Product/Service Button is Clicked
  function displayProductServiceInfo(title, description) {
    productServiceTitle.textContent = title;
    productServiceDescription.textContent = description;
    productServiceInfo.style.display = "block";
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
    .getElementById("backToFormFromProduct")
    ?.addEventListener("click", () => {
      productOptions.style.display = "none";
      registrationForm.style.display = "block";
    });

  // JavaScript to handle back button functionality
  document
    .getElementById("backToRegistrationFromProduct")
    .addEventListener("click", function () {
      document.getElementById("registrationForm").style.display = "block";
      document.getElementById("productOptions").style.display = "none";
    });

  document
    .getElementById("backToRegistrationFromService")
    .addEventListener("click", function () {
      document.getElementById("registrationForm").style.display = "block";
      document.getElementById("serviceOptions").style.display = "block";
    });

  // Back button from Service Options
  document
    .getElementById("backToFormFromService")
    ?.addEventListener("click", () => {
      serviceOptions.style.display = "none";
      registrationForm.style.display = "block";
    });
});
