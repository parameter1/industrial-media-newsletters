module.exports = {
  optOut: {
    unsubscribeLink: "%%=RedirectTo(CloudPagesURL(204, 'sk', _subscriberkey, 'p', listid, 'ln', _listname, 'j', jobid, 'e', _emailid, 'en', emailname_, 'de', _DataSourceName))=%%",
    safeSenders: 'reply.ien.com',
  },
  socialMediaLinks: [
    {
      provider: 'facebook',
      href: 'https://www.facebook.com/designdevelopmenttoday/',
      title: 'Follow us on Facebook',
    },
    {
      provider: 'twitter',
      href: 'https://twitter.com/DesignDevelop12',
      title: 'Follow us on Twitter',
    },
    {
      provider: 'linkedin',
      href: 'https://www.linkedin.com/groups/13611964',
      title: 'Follow us on LinkedIn',
    },
  ],
};
