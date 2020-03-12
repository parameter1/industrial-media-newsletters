module.exports = {
  optOut: {
    unsubscribeLink: "%%=RedirectTo(CloudPagesURL(204, 'sk', _subscriberkey, 'p', listid, 'ln', _listname, 'j', jobid, 'e', _emailid, 'en', emailname_, 'de', _DataSourceName))=%%",
    safeSenders: 'reply.ien.com',
  },
  socialMediaLinks: [
    {
      provider: 'facebook',
      href: 'https://www.facebook.com/Industrial-Equipment-News-153179218105048',
      title: 'Follow us on Facebook',
    },
    {
      provider: 'twitter',
      href: 'https://twitter.com/IEN_Now',
      title: 'Follow us on Twitter',
    },
    {
      provider: 'youtube',
      href: 'https://www.youtube.com/channel/UCwKursTtvT5lmEJBhdYeRbQ',
      title: 'Follow us on YouTube',
    },
    {
      provider: 'instagram',
      href: 'https://www.instagram.com/ien_now/',
      title: 'Follow us on Instagram',
    },
  ],
};
