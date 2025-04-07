const urls = {
  'url1': 'aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vd2ViY29kZW0tbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9BY3Rpb25zJTIwU3R1ZmYlMjAxLjMubWNwYWNr',
  'url2': 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2RyaXZlL2ZvbGRlcnMvMVB1dkpKX21DTlBfUXVlRmJLYWV2WWtsQXg1OURZUzNXP3VzcD1zaGFyaW5n',
  'url3': ['aHR0cHM6Ly93ZWJjb2RlbS5naXRodWIuaW8vd2ViY29kZW0tbWVkaWEuZ2l0aHViLmlvL3Jlc291cmNlcy9tYXJrZXRwbGFjZS9taW5lY3JhZnQvdGV4dHVyZS9SZWFsaXNtQ3JhZnQlMjBSZXNvdXJjZSUyMFBhY2subWNwYWNr', 'aHR0cHM6Ly9kcml2ZS5nb29nbGUuY29tL2ZpbGUvZC8xdnRadnNQTzlfdk1vcTR1dFZ2Uy1rSloydDJxSkVEQi92aWV3P3VzcD1zaGFyaW5n'],
  'url4': '',
  'url5': 'aHR0cHM6Ly93ZWJjb2RlbS1tZWRpYS5naXRodWIuaW8vcmVzb3VyY2VzL21hcmtldHBsYWNlL21pbmVjcmFmdC90ZXh0dXJhL0JhcmUgQm9uZSBQbHVzIFtCRVRBXS5tY3BhY2s='
};

// Updated function to handle both single URLs and arrays of URLs
function decodeAndRedirect(event, urlKey) {
  event.preventDefault(); 
  
  const contentUrl = urls[urlKey];
  
  // Check if it's an array (multiple files) or string (single file)
  if (Array.isArray(contentUrl)) {
    // Handle multiple files with a small delay between downloads
    contentUrl.forEach((url, index) => {
      setTimeout(() => {
        const decodedUrl = atob(url);
        
        // Check if it's a Google Drive or another external link
        if (decodedUrl.includes('drive.google.com') || 
            decodedUrl.includes('dropbox.com') || 
            decodedUrl.includes('mediafire.com')) {
          // Open external links in new tab
          window.open(decodedUrl, '_blank');
        } else {
          // Direct download for GitHub-hosted files
          let filename = decodedUrl.split('/').pop();
          filename = decodeURIComponent(filename);
          
          const link = document.createElement('a');
          link.href = decodedUrl;
          link.download = filename;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }, index * 1500); // 1.5 second delay between downloads
    });
  } else {
    // Original behavior for single file
    const decodedUrl = atob(contentUrl);
    
    // Check if it's a Google Drive or another external link
    if (decodedUrl.includes('drive.google.com') || 
        decodedUrl.includes('dropbox.com') || 
        decodedUrl.includes('mediafire.com')) {
      // Open external links in new tab
      window.open(decodedUrl, '_blank');
    } else {
      // Direct download for GitHub-hosted files
      let filename = decodedUrl.split('/').pop();
      filename = decodeURIComponent(filename);
      
      const link = document.createElement('a');
      link.href = decodedUrl;
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
}

// Keep the original function for backward compatibility
function Download(event, urlKey) {
  decodeAndRedirect(event, urlKey);
}

function closePopup() {
  document.getElementById('overlay').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('overlay')) {
    document.getElementById('overlay').style.display = 'none';
  }
});