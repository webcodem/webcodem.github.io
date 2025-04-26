const urls = {
  'url1': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vd2ViY29kZW0tbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9BY3Rpb25zJTIwU3R1ZmYlMjAxLjMubWNwYWNr',
  'url2': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMVB1dkpKX21DTlBfUXVlRmJLYWV2WWtsQXg1OURZUzNXP3VzcD1zaGFyaW5n',
  'url3': 'aHR0cHM6Ly9naXRodWIuY29tL3dlYmNvZGVtL3dlYmNvZGVtLW1lZGlhLmdpdGh1Yi5pby9yYXcvcmVmcy9oZWFkcy9tYWluL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9SZWFsaXNtQ3JhZnQubWN0ZW1wbGF0ZQ==',
  'url3_resource': 'aHR0cDovL3dlYmNvZGVtLmdpdGh1Yi5pby93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJlL1JlYWxpc21DcmFmdCUyMFJlc291cmNlJTIwUGFjay5tY3BhY2s=',
  'url5': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhcmUgQm9uZSBQbHVzIFtCRVRBXS5tY3BhY2s',
};

// Updated function to fix URL encoding in filename
function decodeAndRedirect(event, urlKey) {
  event.preventDefault(); 

  const contentUrl = urls[urlKey];
  const decodedUrl = atob(contentUrl);

  // Get filename from URL and decode URL-encoded characters
  let filename = decodedUrl.split('/').pop();
  filename = decodeURIComponent(filename); // This converts %20 to spaces and handles other URL-encoded characters

  // Create a hidden anchor and trigger download with the decoded filename
  const link = document.createElement('a');
  link.href = decodedUrl;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Keep the original function for backward compatibility
function Download(event, urlKey) {
  decodeAndRedirect(event, urlKey);
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('overlay').style.display = 'none';
});