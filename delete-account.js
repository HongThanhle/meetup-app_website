const API_BASE_URL = 'https://meetup-app-backend-c8au.onrender.com';
const form = document.querySelector('#delete-form');
const status = document.querySelector('#form-status');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  const button = form.querySelector('button[type="submit"]');
  const data = new FormData(form);
  status.className = 'form-status';
  status.textContent = 'Đang xác thực và xử lý yêu cầu…';
  button.disabled = true;

  try {
    const response = await fetch(`${API_BASE_URL}/auth/account-deletion`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: String(data.get('email') || '').trim(),
        password: String(data.get('password') || ''),
      }),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || 'Không gửi được yêu cầu. Vui lòng thử lại.');
    status.className = 'form-status success';
    status.textContent = 'Tài khoản và dữ liệu cá nhân đã được xóa.';
    form.reset();
  } catch (error) {
    status.className = 'form-status error';
    status.textContent = error.name === 'TypeError'
      ? 'Không kết nối được máy chủ. Kiểm tra mạng rồi thử lại.'
      : error.message;
  } finally {
    button.disabled = false;
  }
});
