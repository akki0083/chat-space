      # テキストと画像があれば保存できる
      it "is valid with a content, image" do
        expect(build(:message)).to be_valid
      end
