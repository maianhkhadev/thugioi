import { Title, Paragraph } from 'rebear';
import styles from './NovelViewer.module.scss';

type NovelViewerProps = {
  title: string;
  content: string;
  fontSize: number;
};

export const NovelViewer = (props: NovelViewerProps) => {
  const { title, content, fontSize } = props;

  return (
    <div style={{ fontSize }}>
      <Title className={styles.title} level={3}>
        Chương 1: Trở về quá khứ (1)
      </Title>
      <Paragraph>
        <div id="chapter-content">
          <p id="1">1.</p>
          <p id="2">Maple World là thế giới của mạo hiểm giả.</p>
          <p id="3">
            Đó là một thế giới mà không thể vận hành được nếu thiếu mạo hiểm
            giả.
          </p>
          <p id="4">
            Một thế giới nơi tất cả lịch sử của nó được viết bởi mạo hiểm giả.
          </p>
          <p id="5">
            Rồi một ngày nọ, một thứ được gọi là Mystic Gate xuất hiện khắp thế
            giới này.
          </p>
          <p id="6">
            “Bên trong Mystic Gate, có rất nhiều quái vật. Không chỉ những con
            đến từ Maple World, mà còn cả những quái vật chưa từng được thấy
            trước đây.”
          </p>
          <p id="7">
            Những con quái vật đáng sợ tràn ra từ phía bên kia của cánh cổng.
          </p>
          <p id="8">
            “Và còn có những vật phẩm. Những thứ khó có thể có được trong Maple
            World và những vật phẩm mà bạn chỉ có thể nghe thấy trong những sử
            thi, truyền thuyết.”
          </p>
          <p id="9">Lúc đó, vật phẩm xuất hiện tràn ngập.</p>
          <p id="10">
            Tất nhiên, các mạo hiểm giả đều rất vui mừng trước sự xuất hiện của
            Mystic Gate.
          </p>
          <p id="11">
            Họ từ bỏ những cuộc phiêu lưu trước đây và lao đầu vào tham gia vào
            cuộc phiêu lưu Mystic Gate.
          </p>
          <p id="12">
            Dần dần, mọi thứ trên thế giới đều xoay quanh Mystic Gate.
          </p>
          <p id="13">
            “Ngày xưa phải leo núi, vượt biển, xẻ trời mới có được một cuộc
            phiêu lưu đáng nhớ. Nhưng bây giờ, ta có thể tìm thấy Cổng thần bí
            xuất hiện ở sân sau nhà và có một cuộc phiêu lưu thậm chí còn thú vị
            hơn.”
          </p>
          <p id="14">
            Từ đó kỷ nguyên của Mystic Gate bắt đầu, một kỷ nguyên được các mạo
            hiểm giả ca ngợi là kỷ nguyên vĩ đại nhất trong lịch sử, kỷ nguyên
            của những giấc mơ.
          </p>
          <p id="15">
            Tuy nhiên, tình hình lại khác đối với những người không phải là mạo
            hiểm giả.
          </p>
          <p id="16">Giống như El Pam.</p>
          <p id="17">
            Một thanh niên hai mươi tuổi đang làm những công việc lặt vặt ở
            thành phố cảng Liss đã bị mất việc chỉ sau một đêm.
          </p>
          <p id="18">
            Điều này là vì khối lượng công việc đã giảm đáng kể do các mạo hiểm
            giả hỗ trợ vận chuyển hậu cần đã đột ngột rời đi để thực hiện chuyến
            phiêu lưu qua Mystic Gate.
          </p>
          <p id="19">
            Tất nhiên, không khó để chàng trai hai mươi tuổi tự nuôi sống bản
            thân.
          </p>
          <p id="20">
            “Đây là Cái chết đen. Một căn bệnh giết chết người bằng cách khiến
            họ ho ra máu đen. Đó là căn bệnh mà cha ngươi đã mắc phải.”
          </p>
          <p id="21">
            Tuy nhiên, cuộc sống của một chàng trai trẻ với một gia đình đang
            dần chết đi lại rất khác biệt.
          </p>
          <p id="22">
            "Phương thuốc chữa bệnh? Có đấy. Ngươi có thể mua được nó với giá
            khoảng 1 triệu meso.”
          </p>
          <p id="23">Cậu cần tiền.</p>
          <p id="24">
            Nhưng không có cách nào để một thanh niên không có việc làm như El
            Pam có thể có được 1 triệu meso.
          </p>
          <p id="25">
            Cuối cùng, cậu đã phải ký một hợp đồng với những điều khoản vô lý để
            vay tiền.
          </p>
          <p id="26">Dù vậy, cha cậu cuối cùng cũng qua đời.</p>
          <p id="27">
            “Kể từ bây giờ, ngươi là nô lệ của tầng lớp thượng lưu Gafor theo
            hợp đồng.”
          </p>
          <p id="28">Và El Pam đã trở thành nô lệ.</p>
          <p id="29">
            "Hãy nhớ lấy. Ngươi là mồi nhử. Nếu ngươi không thể dụ được con quái
            vật đó, tất cả chúng ta sẽ tiêu tùng.”
          </p>
          <p id="30">
            Hơn nữa, vào thời kỳ của Mystic Gate, nơi duy nhất sử dụng nô lệ là
            bên trong Mystic Gate.
          </p>
          <p id="31">
            Vì vậy, hầu hết những nô lệ trở thành mồi nhử đều không thể sống sót
            được quá sáu cuộc phiêu lưu và đều bị quái vật ăn thịt.
          </p>
          <p id="32">“Tên nô lệ này lại sống sót à?”</p>
          <p id="33">
            Tuy nhiên, El Pam vẫn sống sót hết lần này đến lần khác.
          </p>
          <p id="34">Đó không phải là may mắn.</p>
          <p id="35">
            Bởi vì vai trò của một nô lệ còn sống sẽ lại được sử dụng để làm mồi
            nhử, chỉ vậy thôi.
          </p>
          <p id="36">Bởi vậy chỉ có tuyệt vọng nối tiếp tuyệt vọng.</p>
          <p id="37">“Dù sao thì một ngày nào đó tôi cũng sẽ chết.”</p>
          <p id="38">Và rồi một ngày cậu sẽ bị một con quái vật ăn thịt.</p>
          <p id="39">
            Đó là cách El Pam sống trước khi một chiếc vòng đen bất ngờ xuất
            hiện trên cổ tay trái của cậu.
          </p>
          <p id="40">
            Chiếc vòng đầu tiên, điều kiện tiên quyết để trở thành 1 mạo hiểm
            giả, đã được mở khóa.
          </p>
          <p id="41">
            Tầng lớp thượng lưu Gafor, những kẻ sở hữu cậu, không dùng El Pam để
            làm mồi nhử nữa.
          </p>
          <p id="42">
            Tất nhiên, điều đó không có nghĩa là chúng trả tự do cho cậu.
          </p>
          <p id="43">
            “Giá trị của một mạo hiểm giả khác với khi còn là nô lệ, vì vậy nếu
            ngươi làm việc chăm chỉ từ bây giờ, ngươi sẽ có thể trả hết nợ. Hãy
            làm việc chăm chỉ lên."
          </p>
          <p id="44">Cậu làm việc như một con chó.</p>
          <p id="45">
            "Ngươi đã làm việc chăm chỉ. Việc ấy đã trả hết nợ cho ngươi.”
          </p>
          <p id="46">
            Chỉ sau ba năm thức tỉnh với tư cách là một nhà thám hiểm, cậu lần
            đầu tiên được đối xử như một con người.
          </p>
          <p id="47">Và rồi những ngày tự do của cậu bắt đầu.</p>
          <p id="48">“Quái vật đang tràn ra từ Mystic Gate!”</p>
          <p id="49">Thảm họa đó đã bắt đầu phá hủy Maple World.</p>
          <p id="50">
            Những ngày tháng sống sót khốc liệt khỏi thảm họa ấy của El Pam bắt
            đầu.
          </p>
          <p id="51">“Pam, cậu ổn chứ?”</p>
          <p id="52">
            Giữa những ngày tháng khốc liệt đó, El Pam tình cờ phát hiện ra tài
            năng của mình.
          </p>
          <p id="53">“Cậu vừa sử dụng Thunderbolt phải không?”</p>
          <p id="54">
            Cậu không còn cách nào khác ngoài sử dụng Thunderbolt để cứu nguy
            cho đồng đội.
          </p>
          <p id="55">Nó thật điên rồ.</p>
          <p id="56">“Cậu là một pháp sư thuộc tính lửa phải không?”</p>
          <p id="57">
            Sử dụng phép thuật có thuộc tính khác với thuộc tính bẩm sinh của
            một người không khác gì một cái cây đang đùa với lửa. Đó là một hành
            động gây sát thương khủng khiếp cho cơ thể của người thi triển.
          </p>
          <p id="58">
            El Pam cũng biết sự thật đó. Cậu đã sử dụng nó một cách quyết tâm.
          </p>
          <p id="59">Bởi vì cậu không thể mất đồng đội của mình.</p>
          <p id="60">"Cậu có thực sự ổn không?"</p>
          <p id="61">
            Tuy nhiên, cơ thể của El Pam hoàn toàn không hề hấn gì khiến quyết
            tâm của cậu dường như đổ sông đổ biển.
          </p>
          <p id="62">“Có lẽ nào cậu ấy sinh ra đã có hai thuộc tính?”</p>
          <p id="63">
            Tất nhiên, cho đến thời điểm đó, tất cả mọi người, kể cả chính El
            Pam, đều cho rằng cậu vừa sinh ra đã có hai thuộc tính.
          </p>
          <p id="64">“Điều đó không tuyệt vời sao?”</p>
          <p id="65">Bởi vì đó cũng là một vấn đề lớn.</p>
          <p id="66">
            “Chết tiệt, lũ nấm đang tới! Lũ nấm zombie chết tiệt đó đang đến!
            Mọi người, chuẩn bị chiến đấu!”
          </p>
          <p id="67">
            Và thực tế trước mắt không cho cậu cơ hội để khám phá và trau dồi kĩ
            năng của mình.
          </p>
          <p id="68">
            Phải một thời gian sau cậu mới có thể phát huy hết kĩ năng
            All-Master của mình.
          </p>
          <p id="69">“……Mình cũng có thể sử dụng thuộc tính độc.”</p>
          <p id="70">
            Trong tình huống tất cả đồng đội đều đã chết, cậu đã sử dụng phép
            thuật sương mù thuộc tính độc vòng thứ 5 để tự hủy, biết rằng cậu sẽ
            chết ngay khi sử dụng nó. Chỉ sau khi thấy mình thở không chút khó
            khăn giữa làn sương mù độc hại phun trào không ngừng, cậu mới nhận
            ra điều đó.
          </p>
          <p id="71">“Mình có thể đã sử dụng tất cả chúng.”</p>
          <p id="72">Rằng cậu có tài năng của một All-Master.</p>
          <p id="73">Kể từ thời điểm đó, vị thế của El Pam đã thay đổi.</p>
          <p id="74">
            Là một All-Master, cậu trở thành một pháp sư quyền năng.
          </p>
          <p id="75">
            Infinite Magician, Shadow Butterfly Hunter, Balrog Slayer… vô số
            danh hiệu tô điểm lên cho tên tuổi của cậu.
          </p>
          <p id="76">Tuy nhiên, tình trạng của cậu vẫn như cũ.</p>
          <p id="77">
            Cho dù cậu có đánh bại được bao nhiêu con quái vật mạnh mẽ, một con
            quái vật thậm chí còn mạnh hơn sẽ xuất hiện trước mặt cậu.
          </p>
          <p id="78">
            Những ngày tháng phải liều mạng sống sót không những không thay đổi
            mà còn trở nên tồi tệ hơn.
          </p>
          <p id="79">
            Và cuối cùng, tất cả những gì còn lại sau khi sống sót quá những
            trận chiến khốc liệt chỉ là những danh hiệu mới.
          </p>
          <p id="80">Đó là tất cả.</p>
          <p id="81">Không còn gì khác nữa.</p>
          <p id="82">Cậu chỉ đơn giản là sống sót để nhận lấy vinh quang.</p>
          <p id="83">Và bây giờ nó vẫn như vậy.</p>
          <p id="84">"Ah……"</p>
          <p id="85">El Pam nhìn lên bầu trời.</p>
          <p id="86">Sau đó cậu nhìn thấy Horntail vỗ cánh bay đi.</p>
          <p id="87">…Mất một cái đầu, bây giờ có hai cái đầu thay vì ba.</p>
          <p id="88">Đó không phải chiến thắng.</p>
          <p id="89">
            Horntail là một con rồng sẽ không chết trừ khi cả ba cái đầu của nó
            bị cắt đi.
          </p>
          <p id="90">
            Đó là một sinh vật sẽ hồi phục lại những cái đầu mới sau một thời
            gian.
          </p>
          <p id="91">
            Cậu chỉ đơn giản là kiếm cho mình thêm một chút thời gian để thở.
          </p>
          <p id="92">‘Tôi là người duy nhất còn lại.’</p>
          <p id="93">Cái giá phải trả là mạng sống của tất cả đồng đội cậu.</p>
          <p id="94">El Pam không tuyệt vọng trước sự thật ấy.</p>
          <p id="95">‘Lần này cũng vậy.’</p>
          <p id="96">
            Cậu đã trãi qua nỗi tuyệt vọng này đến vô số lần, đến nỗi cậu không
            còn cảm thấy nó đáng để nhắc lại nữa.
          </p>
          <p id="97">El Pam đứng dậy.</p>
          <p id="98">Và cậu chuẩn bị.</p>
          <p id="99">Lần sau nhất định cậu sẽ truy lùng nó.</p>
          <p id="100">
            Horntail, cậu sẽ chuẩn bị để làm cho tất cả những cái đầu của con
            quái vật đó rơi xuống đất và thêm danh hiệu mới vào bộ sưu tập của
            mình: Horntail Slayer.
          </p>
          <p id="101">Có thể hay không, nó không còn quan trọng nữa.</p>
          <p id="102">
            Cậu đang chiến đấu vì điều gì, cậu đang đấu tranh vì ai? Thời gian
            để thảo luận về những vấn đề như vậy đã trôi qua từ lâu rồi.
          </p>
          <p id="103">
            Một thời đại mà việc săn quái vật là cách duy nhất để sống sót.
          </p>
          <p id="104">
            El Pam, mạo hiểm giả cuối cùng của thời đại đó, đứng dậy khỏi mặt
            đất.
          </p>
          <p id="105">‘Lấy vật phẩm thôi.’</p>
          <p id="106">Và cậu đã có một kế hoạch.</p>
          <p id="107">
            ‘Trước tiên hãy đến Đảo Victoria. Đội tiên phong của Cheryl đã chiến
            đấu ở đó, vì vậy những món vật phẩm mà Đội tiên phong của Cheryl sở
            hữu sẽ tập trung ở đó.'
          </p>
          <p id="108">Từng bước một, cậu lên kế hoạch săn Horntail.</p>
          <p id="109">
            ‘Nếu ta có bộ sưu tập của Gerechter, thủ lĩnh của Cross Hunters… ta
            có thể củng cố hơn nữa chiến thuật của mình. Nếu vẫn chưa đủ, hãy
            đến Edelstein. Quân kháng chiến nói rằng họ đã giấu Polearm của
            Aran, một trong Sáu anh hùng, trong két sắt của căn cứ, vì vậy….’
          </p>
          <p id="110">Vào khoảnh khắc ấy.</p>
          <p id="111">
            Đôi chân đang di chuyển của El Pam đột nhiên bị kẹt lại.
          </p>
          <p id="112">Không phải là vì cậu bị tấn công.</p>
          <p id="113">'Ah.'</p>
          <p id="114">Đó là vì đôi chân của cậu không thể cử động được.</p>
          <p id="115">Lý do El Pam không di chuyển không có gì đặc biệt.</p>
          <p id="116">
            Đầu cậu ra lệnh cho đôi chân di chuyển, nhưng chúng không chịu bước
            đi.
          </p>
          <p id="117">'Sức mạnh.'</p>
          <p id="118">Cậu không có đủ sức.</p>
          <p id="119">Thậm chí không còn sức để bước đi.</p>
          <p id="120">Tất nhiên, cậu cũng không còn sức để đứng.</p>
          <p id="121">Thịch!</p>
          <p id="122">El Pam đổ sụp xuống đất như một con rối bị cắt dây.</p>
          <p id="123">Cậu không ngạc nhiên trước sự thật này.</p>
          <p id="124">'Đến lúc rồi.'</p>
          <p id="125">
            Khi đến lúc chết, hầu hết con người đều suy sụp như vậy.
          </p>
          <p id="126">Giống như những người khác.</p>
          <p id="127">El Pam đã chứng kiến tình huống này vô số lần.</p>
          <p id="128">'Lời trăn trối…'</p>
          <p id="129">
            Và cậu cũng đã chứng kiến những gì mọi người làm khi đối mặt với
            khoảnh khắc này vô số lần.
          </p>
          <p id="130">‘Không có một ai để lắng nghe.’</p>
          <p id="131">
            Nhưng thật không may, không giống như El Pam đã lắng nghe những lời
            trắn trối của đồng đội mình, không có ai ở đây để lắng nghe những
            lời cuối cùng của cậu.
          </p>
          <p id="132">
            Không còn ai xung quanh mạo hiểm giả cuối cùng để lắng nghe về những
            chuyến phiêu lưu của anh ta.
          </p>
          <p id="133">
            Tất cả những gì cậu có thể làm là tự thuật lại cho bản thân về câu
            chuyện phiêu lưu của chính mình.
          </p>
          <p id="134">‘Có rất nhiều thứ.’</p>
          <p id="135">Thế rồi hồi ức xuất hiện.</p>
          <p id="136">Và tất nhiên, nó bắt đầu từ đó.</p>
          <p id="137">‘Nó bắt đầu rồi.’</p>
          <p id="138">
            Vào ngày đầu tiên cậu thức tỉnh với tư cách là một mạo hiểm giả.
          </p>
          <p id="139">‘Ngày tôi bị tát.’</p>
          <p id="140">2.</p>
          <p id="141">Bụp!</p>
          <p id="142">
            Khoảnh khắc El Pam ngẩng đầu lên, có thứ gì đó bay đến và đập mạnh
            vào má cậu.
          </p>
          <p id="143">“Đứng dậy ngay, thằng nhóc!”</p>
          <p id="144">
            El Pam chỉ đơn giản là ngạc nhiên nhìn chằm chằm vào người đã tát
            mình, đôi mắt mở to vì sốc trước hành động bất ngờ đầy thô tục và
            bạo lực .
          </p>
          <p id="145">
            Người đàn ông cơ bắp trừng mắt nhìn El Pam và tát cậu lần nữa.
          </p>
          <p id="146">Đập!</p>
          <p id="147">“Mày đang nhìn ai hả, thằng nhóc nô lệ này? Dậy!</p>
          <p id="148">Dậy ngay!"</p>
          <p id="149">Lúc này El Pam mới có thể đứng dậy.</p>
          <p id="150">Tuy nhiên, tâm trí của cậu không minh mẫn.</p>
          <p id="151">
            Khuôn mặt của El Pam mất đi biểu cảm với đôi mắt lờ đờ.
          </p>
          <p id="152">'Cái quái gì đang diễn ra vậy?'</p>
          <p id="153">El Pam đang ở giữa một đoạn hồi tưởng.</p>
          <p id="154">
            Cậu đang cố lục lại những ký ức về miền quá khứ xa xôi, những ký ức
            đầy mơ hồ khi cậu chết.
          </p>
          <p id="155">
            'Đây có phải một đoạn hồi tưởng? Tại sao nó lại đau đớn và rõ ràng
            đến vậy?’
          </p>
          <p id="156">
            Nhưng những gì cậu đang cảm thấy bây giờ không hề mơ hồ.
          </p>
          <p id="157">‘Cảm giác giống như thực tế?’</p>
          <p id="158">
            Má cậu sưng tấy và vị máu động lại trong miệng do bị tát quá mạnh,
            dường như không hề giống một ký ức nào trong quá khứ.
          </p>
          <p id="159">Đó là khi chuyện ấy xảy ra.</p>
          <p id="160">“Ném mồi đi!”</p>
          <p id="161">
            Cùng với tiếng hét bất ngờ, ai đó đã dùng hết sức đá vào lưng El
            Pam.
          </p>
          <p id="162">Bụp!</p>
          <p id="163">
            Cơ thể của El Pam rơi xuống đất theo quán tính và những gì cậu nhìn
            thấy là:
          </p>
          <p id="164">“Lũ nấm cam đang đến!”</p>
          <p id="165">
            Hàng trăm cây nấm cam đang lao về phía cậu như những con bò tót giận
            dữ.
          </p>
          <p id="166">'Ah'</p>
          <p id="167">El Pam càng sốc hơn khi nhìn thấy điều đó.</p>
          <p id="168">“Bỏ mồi và chạy đi!”</p>
          <p id="169">
            Cậu không bị sốc khi nhìn thấy những cây nấm cam đang lao về phía
            mình.
          </p>
          <p id="170">
            Với El Pam, sự hiện diện của quái vật không khác gì việc nhìn thấy
            cây cối trong rừng, đó chỉ là một phần trong cuộc sống thường ngày
            của cậu mà thôi.
          </p>
          <p id="171">'Rõ ràng.'</p>
          <p id="172">
            El Pam bị sốc vì cảnh tượng này là cảnh tượng trong ký ức của cậu.
          </p>
          <p id="173">'Ngày hôm đó.'</p>
          <p id="174">
            Đó không phải ký ức bình thường mà là ký ức cậu không bao giờ có thể
            quên được.
          </p>
          <p id="175">Đương nhiên rồi.</p>
          <p id="176">
            ‘Ngày tôi, một nô lệ bị dùng làm mồi nhử, đã mở vòng tròn đầu tiên
            của mình.’
          </p>
          <p id="177">Bởi đây chính là ngày số phận của El Pam thay đổi.</p>
          <p id="178">
            Bởi vì đây là ngày mà El Pam, một nô lệ, trở thành một mạo hiểm giả.
          </p>
          <p id="179">
            Bởi vì đây là ngày mạo hiểm giả cuối cùng được sinh ra.
          </p>
          <p id="180">Đó là lý do tại sao El Pam bị sốc.</p>
          <p id="181">El Pam, cậu đã nhận ra điều đó.</p>
          <p id="182">‘Mình đã trở về quá khứ.’</p>
          <p id="183">Rằng cậu đã thoái lui.</p>
        </div>
      </Paragraph>
    </div>
  );
};

export default NovelViewer;
