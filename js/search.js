// Instant Sidebar Live Filter for MotorMeasure Pro Docs
document.addEventListener('DOMContentLoaded', function() {
    var searchInput = document.getElementById('docSearchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        var query = this.value.toLowerCase().trim();
        var menuItems = document.querySelectorAll('.sidebar-menu li');
        var sectionTitles = document.querySelectorAll('.sidebar-section-title');

        if (!query) {
            menuItems.forEach(function(item) { item.style.display = ''; });
            sectionTitles.forEach(function(title) { title.style.display = ''; });
            return;
        }

        menuItems.forEach(function(item) {
            var text = item.textContent.toLowerCase();
            if (text.indexOf(query) !== -1) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });

        // Hide section headers if all child items are hidden
        document.querySelectorAll('.sidebar-menu').forEach(function(ul) {
            var prevTitle = ul.previousElementSibling;
            if (prevTitle && prevTitle.classList.contains('sidebar-section-title')) {
                var visibleChildren = ul.querySelectorAll('li:not([style*="display: none"])');
                prevTitle.style.display = visibleChildren.length > 0 ? '' : 'none';
            }
        });
    });
});
