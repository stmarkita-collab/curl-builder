// ==========================================
// KONFIGURASI MENU
// ==========================================
const MENUS = {
  basic: {
    title: '🌐 Basic GET Request',
    desc: 'Mengambil konten dari URL.',
    fields: [
      { name: 'url', label: 'URL', placeholder: 'https://example.com', default: 'https://example.com' },
      { name: 'silent', label: 'Silent (-s)', type: 'checkbox' },
      { name: 'followRedirect', label: 'Follow redirect (-L)', type: 'checkbox' },
      { name: 'verbose', label: 'Verbose (-v)', type: 'checkbox' },
      { name: 'includeHeaders', label: 'Tampilkan header (-i)', type: 'checkbox' },
    ],
  },
  download: {
    title: '📥 Download File',
    desc: 'Download file ke disk.',
    fields: [
      { name: 'url', label: 'URL File', placeholder: 'https://example.com/file.zip', default: '' },
      { name: 'filename', label: 'Simpan sebagai (-o)', placeholder: 'hasil.zip (kosong = -O)', default: '' },
      { name: 'resume', label: 'Resume (-C -)', type: 'checkbox' },
      { name: 'limitRate', label: 'Limit rate (--limit-rate)', placeholder: '100K' },
      { name: 'progressBar', label: 'Progress bar (-#)', type: 'checkbox' },
    ],
  },
  'post-form': {
    title: '📤 POST Form',
    desc: 'Kirim data form-urlencoded.',
    fields: [
      { name: 'url', label: 'URL', placeholder: 'https://api.example.com/login', default: '' },
      { name: 'data', label: 'Data (-d)', placeholder: 'user=admin&pass=123', default: '' },
      { name: 'method', label: 'Method', type: 'select', options: ['POST', 'PUT', 'PATCH', 'DELETE'], default: 'POST' },
    ],
  },
  'post-json': {
    title: '🧾 POST JSON',
    desc: 'Kirim body JSON ke API.',
    fields: [
      { name: 'url', label: 'URL', placeholder: 'https://api.example.com/users', default: '' },
      { name: 'json', label: 'JSON Body', type: 'textarea', placeholder: '{"nama":"Budi","umur":25}', default: '{"nama":"Budi","umur":25}' },
      { name: 'method', label: 'Method', type: 'select', options: ['POST', 'PUT', 'PATCH', 'DELETE'], default: 'POST' },
      { name: 'fromFile', label: 'Ambil JSON dari file (@file)', type: 'checkbox' },
    ],
  },
  upload: {
    title: '📁 Upload File',
    desc: 'Upload file dengan multipart/form-data.',
    fields: [
      { name: 'url', label: 'URL Endpoint', placeholder: 'https://api.example.com/upload', default: '' },
      { name: 'file', label: 'Path File (-F)', placeholder: 'foto.jpg', default: '' },
      { name: 'fieldName', label: 'Nama field', placeholder: 'file', default: 'file' },
      { name: 'extraField', label: 'Field tambahan (opsional)', placeholder: 'nama=Budi' },
    ],
  },
  auth: {
    title: '🔐 Autentikasi',
    desc: 'Request dengan autentikasi.',
    fields: [
      { name: 'url', label: 'URL', placeholder: 'https://api.example.com/me', default: '' },
      { name: 'authType', label: 'Tipe Auth', type: 'select', options: ['Basic Auth (-u)', 'Bearer Token', 'API Key Header'], default: 'Basic Auth (-u)' },
      { name: 'credential', label: 'User:Pass / Token / Key', placeholder: 'admin:123', default: '' },
      { name: 'headerName', label: 'Nama Header (jika API Key)', placeholder: 'X-API-Key', default: 'X-API-Key' },
    ],
  },
  headers: {
    title: '🧩 Custom Header',
    desc: 'Kirim request dengan header kustom.',
    fields: [
      { name: 'url', label: 'URL', placeholder: 'https://api.example.com', default: '' },
      { name: 'headers', label: 'Headers (satu per baris: Nama: Nilai)', type: 'textarea', placeholder: 'Accept: application/json\nX-Custom: value', default: 'Accept: application/json' },
      { name: 'userAgent', label: 'User-Agent (-A)', placeholder: 'MyApp/1.0' },
      { name: 'referer', label: 'Referer (-e)', placeholder: 'https://google.com' },
    ],
  },
  cookie: {
    title: '🍪 Cookie / Session',
    desc: 'Kelola cookie dan session.',
    fields: [
      { name: 'url', label: 'URL', placeholder: 'https://site.com/dashboard', default: '' },
      { name: 'action', label: 'Aksi', type: 'select', options: ['Kirim cookie (-b)', 'Simpan cookie (-c)', 'Kirim + Simpan (-b -c)'], default: 'Kirim + Simpan (-b -c)' },
      { name: 'cookieFile', label: 'File Cookie', placeholder: 'cookies.txt', default: 'cookies.txt' },
      { name: 'cookieString', label: 'Cookie String (jika -b)', placeholder: 'session=abc123' },
    ],
  },
  debug: {
    title: '🔍 Debug / Inspect',
    desc: 'Inspeksi request dan response.',
    fields: [
      { name: 'url', label: 'URL', placeholder: 'https://example.com', default: '' },
      { name: 'verbose', label: 'Verbose (-v)', type: 'checkbox' },
      { name: 'headOnly', label: 'Header saja (-I)', type: 'checkbox' },
      { name: 'showStatus', label: 'Tampilkan status code (-w)', type: 'checkbox' },
      { name: 'showTime', label: 'Tampilkan waktu total (-w)', type: 'checkbox' },
    ],
  },
  advanced: {
    title: '⚙️ Advanced',
    desc: 'Opsi lanjutan cURL.',
    fields: [
      { name: 'url', label: 'URL', placeholder: 'https://example.com', default: '' },
      { name: 'timeout', label: 'Max time (--max-time, detik)', placeholder: '10' },
      { name: 'retry', label: 'Retry (--retry)', placeholder: '3' },
      { name: 'proxy', label: 'Proxy (-x)', placeholder: 'http://proxy:8080' },
      { name: 'insecure', label: 'Abaikan SSL (-k)', type: 'checkbox' },
      { name: 'http2', label: 'Pakai HTTP/2 (--http2)', type: 'checkbox' },
      { name: 'compressed', label: 'Kompresi (--compressed)', type: 'checkbox' },
    ],
  },
  preset: {
    title: '⚡ Preset Cepat',
    desc: 'Pilih pola siap pakai.',
    fields: [
      { name: 'preset', label: 'Pilih Preset', type: 'select', options: [
        'Cek status endpoint',
        'Health check lengkap',
        'Login + akses halaman',
        'Ambil JSON + jq',
        'Loop banyak URL',
        'Backup harian',
        'Kirim notifikasi Slack',
      ], default: 'Cek status endpoint' },
      { name: 'url', label: 'URL (jika perlu)', placeholder: 'https://api.example.com/health', default: '' },
    ],
  },
};

// ==========================================
// STATE
// ==========================================
let currentMenu = 'basic';
let history = JSON.parse(localStorage.getItem('curl_history') || '[]');

// ==========================================
// INIT
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  bindMenu();
  renderForm(currentMenu);
  renderHistory();
  bindActions();
});

// ==========================================
// MENU
// ==========================================
function bindMenu() {
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.menu-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMenu = btn.dataset.menu;
      renderForm(currentMenu);
    });
  });
}

// ==========================================
// FORM RENDER
// ==========================================
function renderForm(menuKey) {
  const menu = MENUS[menuKey];
  document.getElementById('formTitle').textContent = menu.title;
  document.getElementById('formDesc').textContent = menu.desc;

  const form = document.getElementById('curlForm');
  form.innerHTML = '';

  menu.fields.forEach(f => {
    const wrapper = document.createElement('div');
    wrapper.className = 'field';

    if (f.type === 'checkbox') {
      wrapper.className = 'checkbox-row';
      wrapper.innerHTML = `
        <input type="checkbox" id="f_${f.name}" name="${f.name}" />
        <label for="f_${f.name}">${f.label}</label>
      `;
    } else if (f.type === 'textarea') {
      wrapper.innerHTML = `
        <label for="f_${f.name}">${f.label}</label>
        <textarea id="f_${f.name}" name="${f.name}" placeholder="${f.placeholder || ''}">${f.default || ''}</textarea>
      `;
    } else if (f.type === 'select') {
      const opts = f.options.map(o => `<option ${o === f.default ? 'selected' : ''}>${o}</option>`).join('');
      wrapper.innerHTML = `
        <label for="f_${f.name}">${f.label}</label>
        <select id="f_${f.name}" name="${f.name}">${opts}</select>
      `;
    } else {
      wrapper.innerHTML = `
        <label for="f_${f.name}">${f.label}</label>
        <input type="text" id="f_${f.name}" name="${f.name}" placeholder="${f.placeholder || ''}" value="${f.default || ''}" />
      `;
    }
    form.appendChild(wrapper);
  });

  form.oninput = buildCommand;
  form.onchange = buildCommand;
  buildCommand();
}

// ==========================================
// BUILD COMMAND
// ==========================================
function buildCommand() {
  const form = document.getElementById('curlForm');
  const data = {};
  new FormData(form).forEach((v, k) => data[k] = v);
  form.querySelectorAll('input[type="checkbox"]').forEach(cb => data[cb.name] = cb.checked);

  let cmd = 'curl';
  const url = data.url || '';

  switch (currentMenu) {
    case 'basic':
      if (data.silent) cmd += ' -s';
      if (data.followRedirect) cmd += ' -L';
      if (data.verbose) cmd += ' -v';
      if (data.includeHeaders) cmd += ' -i';
      cmd += ` ${url}`;
      break;

    case 'download':
      if (data.progressBar) cmd += ' -#';
      if (data.resume) cmd += ' -C -';
      if (data.limitRate) cmd += ` --limit-rate ${data.limitRate}`;
      if (data.filename) cmd += ` -o ${data.filename}`;
      else cmd += ' -O';
      cmd += ` ${url}`;
      break;

    case 'post-form':
      cmd += ` -X ${data.method}`;
      if (data.data) cmd += ` -d "${data.data}"`;
      cmd += ` ${url}`;
      break;

    case 'post-json':
      cmd += ` -X ${data.method}`;
      cmd += ` -H "Content-Type: application/json"`;
      if (data.json) {
        if (data.fromFile) cmd += ` -d @${data.json}`;
        else cmd += ` -d '${data.json}'`;
      }
      cmd += ` ${url}`;
      break;

    case 'upload':
      cmd += ' -X POST';
      if (data.file) cmd += ` -F "${data.fieldName || 'file'}=@${data.file}"`;
      if (data.extraField) cmd += ` -F "${data.extraField}"`;
      cmd += ` ${url}`;
      break;

    case 'auth':
      if (data.authType === 'Basic Auth (-u)') {
        cmd += ` -u ${data.credential}`;
      } else if (data.authType === 'Bearer Token') {
        cmd += ` -H "Authorization: Bearer ${data.credential}"`;
      } else {
        cmd += ` -H "${data.headerName}: ${data.credential}"`;
      }
      cmd += ` ${url}`;
      break;

    case 'headers':
      if (data.headers) {
        data.headers.split('\n').filter(Boolean).forEach(h => {
          cmd += ` \\\n  -H "${h.trim()}"`;
        });
      }
      if (data.userAgent) cmd += ` -A "${data.userAgent}"`;
      if (data.referer) cmd += ` -e "${data.referer}"`;
      cmd += ` ${url}`;
      break;

    case 'cookie':
      if (data.action.includes('-b -c')) {
        cmd += ` -b ${data.cookieFile} -c ${data.cookieFile}`;
      } else if (data.action.includes('-b')) {
        cmd += ` -b "${data.cookieString || data.cookieFile}"`;
      } else {
        cmd += ` -c ${data.cookieFile}`;
      }
      cmd += ` ${url}`;
      break;

    case 'debug':
      if (data.verbose) cmd += ' -v';
      if (data.headOnly) cmd += ' -I';
      if (data.showStatus) cmd += ' -s -o /dev/null -w "%{http_code}\\n"';
      if (data.showTime) cmd += ' -w "\\nTotal: %{time_total}s\\n"';
      cmd += ` ${url}`;
      break;

    case 'advanced':
      if (data.timeout) cmd += ` --max-time ${data.timeout}`;
      if (data.retry) cmd += ` --retry ${data.retry}`;
      if (data.proxy) cmd += ` -x ${data.proxy}`;
      if (data.insecure) cmd += ' -k';
      if (data.http2) cmd += ' --http2';
      if (data.compressed) cmd += ' --compressed';
      cmd += ` ${url}`;
      break;

    case 'preset':
      cmd = buildPreset(data);
      break;
  }

  document.getElementById('output').textContent = cmd.trim();
}

// ==========================================
// PRESET
// ==========================================
function buildPreset(data) {
  const url = data.url || 'https://api.example.com/health';
  switch (data.preset) {
    case 'Cek status endpoint':
      return `curl -s -o /dev/null -w "%{http_code}\\n" ${url}`;
    case 'Health check lengkap':
      return `curl -s -o /dev/null \\\n  -w "Status: %{http_code} | Time: %{time_total}s\\n" \\\n  --max-time 10 --retry 2 \\\n  ${url}`;
    case 'Login + akses halaman':
      return `curl -c cj.txt -d "user=admin&pass=123" https://site.com/login && \\\ncurl -b cj.txt https://site.com/dashboard`;
    case 'Ambil JSON + jq':
      return `curl -s ${url} | jq`;
    case 'Loop banyak URL':
      return `for u in url1 url2 url3; do\n  curl -s -o /dev/null -w "$u: %{http_code}\\n" "$u"\ndone`;
    case 'Backup harian':
      return `curl -s ${url} > "backup-$(date +%F).json"`;
    case 'Kirim notifikasi Slack':
      return `curl -X POST -H 'Content-type: application/json' \\\n  --data '{"text":"Deploy selesai!"}' \\\n  https://hooks.slack.com/services/XXX/YYY/ZZZ`;
    default:
      return `curl ${url}`;
  }
}

// ==========================================
// ACTIONS
// ==========================================
function bindActions() {
  document.getElementById('copyBtn').onclick = () => {
    const text = document.getElementById('output').textContent;
    navigator.clipboard.writeText(text).then(() => {
      showStatus('✅ Perintah disalin!');
    });
  };

  document.getElementById('clearBtn').onclick = () => {
    renderForm(currentMenu);
    showStatus('🧹 Form direset');
  };

  document.getElementById('saveBtn').onclick = () => {
    const cmd = document.getElementById('output').textContent;
    if (!cmd || cmd === 'curl') return showStatus('⚠️ Perintah kosong');
    history.unshift({ cmd, menu: currentMenu, time: Date.now() });
    history = history.slice(0, 30);
    localStorage.setItem('curl_history', JSON.stringify(history));
    renderHistory();
    showStatus('💾 Tersimpan ke riwayat');
  };

  document.getElementById('clearHistory').onclick = () => {
    if (confirm('Hapus semua riwayat?')) {
      history = [];
      localStorage.removeItem('curl_history');
      renderHistory();
    }
  };
}

// ==========================================
// HISTORY
// ==========================================
function renderHistory() {
  const el = document.getElementById('historyList');
  if (history.length === 0) {
    el.innerHTML = '<div style="color:#64748b;font-size:12px">Belum ada riwayat</div>';
    return;
  }
  el.innerHTML = history.map((h, i) =>
    `<div class="history-item" data-idx="${i}" title="Klik untuk muat">${escapeHtml(h.cmd)}</div>`
  ).join('');

  el.querySelectorAll('.history-item').forEach(item => {
    item.onclick = () => {
      const h = history[item.dataset.idx];
      document.getElementById('output').textContent = h.cmd;
      showStatus('📥 Dimuat dari riwayat');
    };
  });
}

function escapeHtml(s) {
  return s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

// ==========================================
// STATUS
// ==========================================
function showStatus(msg) {
  const el = document.getElementById('statusMsg');
  el.textContent = msg;
  setTimeout(() => el.textContent = '', 2000);
    }
