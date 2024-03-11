document.addEventListener('DOMContentLoaded', function() {
  const toggleMenuButton = document.getElementById('toggleMenu');
  const menu = document.querySelector('.menu');
  const sidebar = document.getElementById('sidebar');
  const labels = sidebar.querySelectorAll('.label');
  let isSmallLogo = true;

  toggleMenuButton.addEventListener('click', function() {
    menu.classList.toggle('expanded');
    isSmallLogo = !isSmallLogo;
    if (isSmallLogo) {
      toggleMenuButton.innerHTML = '<img src="../../static/task/img/image 37.png" alt="Маленькое лого">';
      // Скрыть текстовые метки
      labels.forEach(label => label.style.display = 'none');
    } else {
      toggleMenuButton.innerHTML = '<img src="../../static/task/img/qwqw.png" alt="Большое лого">';
      // Показать текстовые метки
      labels.forEach(label => label.style.display = 'inline-block');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('.search-input');
  const searchText = document.querySelector('.search-text');

  searchInput.addEventListener('input', function() {
    if (searchInput.value.length > 0) {
      searchText.style.opacity = '0';
    } else {
      searchText.style.opacity = '1';
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const notificationButton = document.getElementById('notificationButton');
  const profileButton = document.getElementById('profileButton');
  const modal = document.getElementById('modal');
  const closeButton = modal.querySelector('.close');

  notificationButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  profileButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
});
