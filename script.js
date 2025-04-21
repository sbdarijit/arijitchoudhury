function navigateTo(sectionId) {
  if (sectionId === 'resume') {
    // Open the resume link in a new tab
    window.open('https://example.com/resume.pdf', '_blank'); // Replace with your resume link
    return; // Stop further execution if it's the resume section
  }

  // Hide main page
  document.getElementById('main-page').style.display = 'none';
  
  // Hide all other sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });

  // Show selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove('hidden');
  selectedSection.style.display = 'flex';
}

function goBack() {
  // Show main page
  const mainPage = document.getElementById('main-page');
  mainPage.style.display = 'flex'; // Show main page
  
  // Hide all other sections
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
    section.style.display = 'none';
  });
}