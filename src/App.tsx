import React, {useState} from 'react';
import './App.css';
import './assets/css/front.css';

export const friends = [
    { id: 'GENERAL', label: '이곳을 자주 방문하는 친구들에게' },
    { id: 'REALTIME', label: '지금 이곳 주변에 있는 친구들에게' },
];


function App() {
    const [target, setTarget] = useState<{id: string; label: string;}>(friends[0]);
    return (
        <div className="qfeed-wrap">
            <div className="page-question">
                <div className="container-top">
                    <div className="txt-title">Test</div>
                </div>
                <div className="container-content">
                    <div className="content-area type-location">
                        <h2 className="txt-title">대상</h2>
                        <div className="setting-block">
                            <div className="component-dropdown">
                                {
                                    // 1. target State를 이용해 동적 셋팅
                                }
                                <span className="txt-label">이곳을 자주 방문하는 친구들에게</span>
                            </div>
                        </div>
                    </div>

                    <div className="content-area">
                        <h2 className="txt-title">대상 선택</h2>
                        <div className="setting-block">

                            {
                                // 2. 클릭 시, drop-down list show/hide
                                // drop-down hide: aria-expanded="false"
                                // drop-down show : aira-expanded="true"
                            }
                            <div className="component-dropdown" aria-expanded="true">
                                <span className="txt-label">이곳을 자주 방문하는 친구들에게</span>
                                <div className="layer-dropdown">
                                    <div className="box-dropdown">
                                        <ul className="list-options">
                                        {
                                            friends.map((friend) =>
                                                <li key={friend.id} >
                                                    {
                                                        // 3. dropdown이 open 될 때, 선택되어 있는 값 셋팅
                                                        // checked="true" 이면 리스트 선택 됨.
                                                    }
                                                    <input type="radio" id={friend.id} name={friend.id} checked/>
                                                    <label className="item-option" htmlFor={friend.id}>
                                                        <span className="txt-option">{friend.label}</span>
                                                    </label>
                                                </li>
                                           )
                                        }
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="section-button">
                    <button type="button" className="btn-extension">초기화</button>
                </div>
            </div>
        </div>
    );
}

export default App;
