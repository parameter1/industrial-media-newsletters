module.exports = {
  optOut: {
    unsubscribeLink: "%%=RedirectTo(CloudPagesURL(204, 'sk', _subscriberkey, 'p', listid, 'ln', _listname, 'j', jobid, 'e', _emailid, 'en', emailname_, 'de', _DataSourceName))=%%",
    safeSenders: 'reply.ien.com',
  },
  socialMediaLinks: [
    {
      provider: 'facebook',
      href: 'https://www.facebook.com/CannaEquipmentNews/',
      title: 'Follow us on Facebook',
    },
    {
      provider: 'twitter',
      href: 'https://twitter.com/news_cen',
      title: 'Follow us on Twitter',
    },
  ],
};
