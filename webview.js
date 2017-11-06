'use strict';

var _electron = require('electron');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getFavIcon = function getFavIcon(count = 0) {
  console.log('getFavIcon', count);
  const CustomWebsiteUrl = document.location.host;
  const favIconBase = 'https://plus.google.com/_/favicon?domain_url=';
  const favIconUrl = favIconBase + CustomWebsiteUrl;
  console.log('FavIconUrl', favIconUrl);
  if (favIconUrl) {
    _electron.ipcRenderer.sendToHost('avatar', favIconUrl);
  }
};

module.exports = Franz => {

  setTimeout(() => {
    getFavIcon();
  }, 4000);

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNsYWNrL3dlYnZpZXcuanMiXSwibmFtZXMiOlsiZ2V0VGVhbUljb24iLCJjb3VudCIsImNvbnNvbGUiLCJsb2ciLCJjb3VudFRlYW1JY29uQ2hlY2siLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsImljb24iLCJiZ1VybCIsIndpbmRvdyIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwiZXhlYyIsInNlbmRUb0hvc3QiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZm9jdXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiRnJhbnoiLCJnZXRNZXNzYWdlcyIsImRpcmVjdE1lc3NhZ2VzIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCIsImFsbE1lc3NhZ2VzIiwic2V0QmFkZ2UiLCJsb29wIiwiaW5qZWN0Q1NTIiwiam9pbiIsIl9fZGlybmFtZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7Ozs7O0FBRUEsTUFBTUEsY0FBYyxTQUFTQSxXQUFULENBQXFCQyxRQUFRLENBQTdCLEVBQWdDO0FBQ2xEQyxVQUFRQyxHQUFSLENBQVksYUFBWixFQUEyQkYsS0FBM0I7QUFDQSxNQUFJRyxxQkFBcUJILEtBQXpCO0FBQ0FJLFdBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUNDLEtBQXJDO0FBQ0FILHdCQUFzQixDQUF0QjtBQUNBLFFBQU1JLE9BQU9ILFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBYjtBQUNBLE1BQUlHLFFBQVFDLE9BQU9DLGdCQUFQLENBQXdCSCxJQUF4QixFQUE4QixJQUE5QixFQUFvQ0ksZ0JBQXBDLENBQXFELGtCQUFyRCxDQUFaO0FBQ0FILFVBQVEseUJBQXlCSSxJQUF6QixDQUE4QkosS0FBOUIsQ0FBUjtBQUNBQSxVQUFRQSxRQUFRQSxNQUFNLENBQU4sQ0FBUixHQUFtQixFQUEzQjtBQUNBLE1BQUlBLEtBQUosRUFBVztBQUNULDBCQUFZSyxVQUFaLENBQXVCLFFBQXZCLEVBQWlDTCxLQUFqQztBQUNELEdBRkQsTUFFTyxJQUFJTCxzQkFBc0IsQ0FBMUIsRUFBNkI7QUFDbENXLGVBQVcsTUFBTTtBQUNmZixrQkFBWUkscUJBQXFCLENBQWpDO0FBQ0QsS0FGRCxFQUVHLElBRkg7QUFHRDs7QUFFRFcsYUFBVyxNQUFNO0FBQ2ZWLGFBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUNVLE1BQXJDO0FBQ0FYLGFBQVNDLGFBQVQsQ0FBdUIsdUJBQXZCLEVBQWdEVyxLQUFoRDtBQUNELEdBSEQsRUFHRyxFQUhIO0FBSUQsQ0FyQkQ7O0FBdUJBQyxPQUFPQyxPQUFQLEdBQWtCQyxLQUFELElBQVc7QUFDMUIsUUFBTUMsY0FBYyxNQUFNO0FBQ3hCLFVBQU1DLGlCQUFpQmpCLFNBQVNrQixnQkFBVCxDQUEwQiwyQkFBMUIsRUFBdURDLE1BQTlFO0FBQ0EsVUFBTUMsY0FBY3BCLFNBQVNrQixnQkFBVCxDQUEwQix1RkFBMUIsRUFBbUhDLE1BQW5ILEdBQTRIRixjQUFoSjs7QUFFQTtBQUNBRixVQUFNTSxRQUFOLENBQWVKLGNBQWYsRUFBK0JHLFdBQS9CO0FBQ0QsR0FORDtBQU9BTCxRQUFNTyxJQUFOLENBQVdOLFdBQVg7O0FBRUFOLGFBQVcsTUFBTTtBQUNmZjtBQUNELEdBRkQsRUFFRyxJQUZIOztBQUlBO0FBQ0FvQixRQUFNUSxTQUFOLENBQWdCLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQixhQUFyQixDQUFoQjtBQUNELENBaEJEIiwiZmlsZSI6InNsYWNrL3dlYnZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpcGNSZW5kZXJlciB9IGZyb20gJ2VsZWN0cm9uJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5jb25zdCBnZXRUZWFtSWNvbiA9IGZ1bmN0aW9uIGdldFRlYW1JY29uKGNvdW50ID0gMCkge1xuICBjb25zb2xlLmxvZygnZ2V0VGVhbUljb24nLCBjb3VudCk7XG4gIGxldCBjb3VudFRlYW1JY29uQ2hlY2sgPSBjb3VudDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RlYW1fbWVudScpLmNsaWNrKCk7XG4gIGNvdW50VGVhbUljb25DaGVjayArPSAxO1xuICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlYW1faWNvbicpO1xuICBsZXQgYmdVcmwgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShpY29uLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG4gIGJnVXJsID0gL151cmxcXCgoWydcIl0/KSguKilcXDFcXCkkLy5leGVjKGJnVXJsKTtcbiAgYmdVcmwgPSBiZ1VybCA/IGJnVXJsWzJdIDogJyc7XG4gIGlmIChiZ1VybCkge1xuICAgIGlwY1JlbmRlcmVyLnNlbmRUb0hvc3QoJ2F2YXRhcicsIGJnVXJsKTtcbiAgfSBlbHNlIGlmIChjb3VudFRlYW1JY29uQ2hlY2sgPD0gMykge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZ2V0VGVhbUljb24oY291bnRUZWFtSWNvbkNoZWNrICsgMSk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVhbV9tZW51JykucmVtb3ZlKCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21zZ19pbnB1dCAucWwtZWRpdG9yJykuZm9jdXMoKTtcbiAgfSwgMTApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSAoRnJhbnopID0+IHtcbiAgY29uc3QgZ2V0TWVzc2FnZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlyZWN0TWVzc2FnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucC1jaGFubmVsX3NpZGViYXJfX2JhZGdlJykubGVuZ3RoO1xuICAgIGNvbnN0IGFsbE1lc3NhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnAtY2hhbm5lbF9zaWRlYmFyX19jaGFubmVsLS11bnJlYWQ6bm90KFtjbGFzcyo9XCJwLWNoYW5uZWxfc2lkZWJhcl9fY2hhbm5lbC0tbXV0ZWRcIl0pJykubGVuZ3RoIC0gZGlyZWN0TWVzc2FnZXM7XG5cbiAgICAvLyBzZXQgRnJhbnogYmFkZ2VcbiAgICBGcmFuei5zZXRCYWRnZShkaXJlY3RNZXNzYWdlcywgYWxsTWVzc2FnZXMpO1xuICB9O1xuICBGcmFuei5sb29wKGdldE1lc3NhZ2VzKTtcblxuICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICBnZXRUZWFtSWNvbigpO1xuICB9LCA0MDAwKTtcblxuICAvLyBpbmplY3QgZnJhbnouY3NzIHN0eWxlc2hlZXRcbiAgRnJhbnouaW5qZWN0Q1NTKHBhdGguam9pbihfX2Rpcm5hbWUsICdzZXJ2aWNlLmNzcycpKTtcbn07XG4iXX0=