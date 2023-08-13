/**
 * @author lulongwen
 * Date: 2023-02-25 09:53
 * Description:
 */

export const FILE_TYPE = {
  xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
}

/**
 * fetch请求资源转成 blog 下载 *.xlsx
 * @param url {string}
 * @param filename {string}
 * @param filetype {string}
 */
export function downloadFileByFetch(url: string, filename: string, filetype: string = FILE_TYPE.xlsx) {
  fetch(url)
    .then(res => res.blob())
    .then((data) => {
      const blob = new Blob([data], {type: filetype});
      const a = document.createElement('a');
      const downloadUrl = window.URL.createObjectURL(blob);

      a.style.display = 'none';
      a.download = filename;
      a.href = downloadUrl;

      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(downloadUrl);
      // a = null;
    });
}

export function downloadFile(blob: Blob, filename: string) {
  const downloadUrl = URL.createObjectURL(blob);
  const a = document.createElement('a');

  a.style.display = 'none';
  a.download = filename;
  a.href = downloadUrl;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(downloadUrl);
}
