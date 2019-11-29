    context 'log in' do
      before do
        login user
        get :index, params: { group_id: group.id }
      end
    end
