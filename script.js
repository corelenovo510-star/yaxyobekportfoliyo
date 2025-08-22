function showSection(sectionId) {
    const sections = ['home', 'skills', 'contact'];
    sections.forEach(id => {
        document.getElementById(id).classList.add('d-none');
    });
    document.getElementById(sectionId).classList.remove('d-none');
}
