class TicketSupportController < ApplicationController
  before_action :authenticate_account!
  layout 'accounts'

  def index
  end
end
