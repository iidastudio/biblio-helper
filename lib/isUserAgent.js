export const isUserAgent = (target) => {
  const userAgent = navigator.userAgent.toLowerCase();

  if ( 'msie' === target ) {
    return userAgent.includes('meie');
  } else if ( 'edge' === target ) {
    return userAgent.includes('edge');
  } else if ('chrome' === target) {
    return userAgent.includes('chrome');
  } else if ('safari' === target) {
    return userAgent.includes('safari') && !userAgent.includes('chrome');
  } else if ('firefox' === target) {
    return userAgent.includes('firefox');
  }

  return false;
}
